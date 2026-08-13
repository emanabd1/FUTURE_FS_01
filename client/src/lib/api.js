export const API_URL=import.meta.env.VITE_API_URL||'http://localhost:5000/api';
async function request(url,options){const r=await fetch(url,options);const d=await r.json().catch(()=>({}));if(!r.ok)throw new Error(d.message||'Request failed');return d;}
export async function chat(message){const d=await request(`${API_URL}/chat`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message})});return d.reply||d.answer||d.response||d.message;}
export async function contact(payload){return request(`${API_URL}/contact`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});}
