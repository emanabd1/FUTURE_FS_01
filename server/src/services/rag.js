import OpenAI from 'openai';
import Knowledge from '../models/Knowledge.js';

function score(query, doc){
  const q = query.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
  const text = `${doc.title} ${doc.content} ${(doc.tags||[]).join(' ')}`.toLowerCase();
  let s=0; for(const word of q){ if(word.length>2 && text.includes(word)) s += text.split(word).length-1; }
  return s;
}
export async function answerQuestion(question){
  const docs=await Knowledge.find().lean();
  const top=docs.map(d=>({...d,_score:score(question,d)})).sort((a,b)=>b._score-a._score).slice(0,5);
  const context=top.map(d=>`### ${d.title}\n${d.content}`).join('\n\n');
  if(process.env.OPENAI_API_KEY){
    const client=new OpenAI({apiKey:process.env.OPENAI_API_KEY});
    const r=await client.chat.completions.create({model:process.env.OPENAI_MODEL||'gpt-4o-mini',temperature:.2,messages:[
      {role:'system',content:'You are the portfolio assistant. Answer only from the provided portfolio context. If the answer is not in the context, say that you do not have that information and suggest contacting the owner. Be concise and professional.'},
      {role:'user',content:`Portfolio context:\n${context}\n\nQuestion: ${question}`}
    ]});
    return {answer:r.choices[0].message.content,sources:top.map(d=>d.title)};
  }
  if(top[0]?._score>0) return {answer:top[0].content,sources:top.slice(0,3).map(d=>d.title)};
  return {answer:'I do not have enough information to answer that yet. Please use the contact form to ask directly.',sources:[]};
}
