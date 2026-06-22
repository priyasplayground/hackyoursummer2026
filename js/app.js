const STORAGE_KEY = 'hys_materials_v1'

const defaultData = {
  read: [
    {title:'Intro to Rust — official book',url:'https://doc.rust-lang.org/book/',notes:'Great systems overview'}
  ],
  recordings: [
    {title:'Opening keynote — 2026',url:'',notes:'Zoom recording (add link)'}
  ],
  demos: [
    {title:'Project A demo',url:'',notes:'Slides + code in README'}
  ],
  ideas: [
    {title:'Smart recycling bin',url:'',notes:'Team brainstorm'}
  ]
}

function loadData(){
  const raw = localStorage.getItem(STORAGE_KEY)
  if(!raw) return defaultData
  try{ return JSON.parse(raw) }catch(e){return defaultData}
}

function saveData(data){
  localStorage.setItem(STORAGE_KEY,JSON.stringify(data))
}

function render(){
  const data = loadData()
  renderList('readList', data.read)
  renderList('recordingsList', data.recordings)
  renderList('demosList', data.demos)
  renderList('ideasList', data.ideas)
}

function renderList(elId, items){
  const ul = document.getElementById(elId)
  ul.innerHTML = ''
  items.forEach((it, idx)=>{
    const li = document.createElement('li')
    li.className = 'item'
    const left = document.createElement('div')
    const a = it.url ? document.createElement('a') : document.createElement('span')
    if(it.url){a.href = it.url; a.target='_blank'}
    a.textContent = it.title
    left.appendChild(a)
    if(it.notes){
      const meta = document.createElement('div')
      meta.className='meta'
      meta.textContent = it.notes
      left.appendChild(meta)
    }
    const actions = document.createElement('div')
    actions.className = 'actions'
    const del = document.createElement('button')
    del.textContent = 'Delete'
    del.addEventListener('click',()=>{ removeItem(elId, idx) })
    actions.appendChild(del)
    li.appendChild(left)
    li.appendChild(actions)
    ul.appendChild(li)
  })
}

function removeItem(listId, index){
  const key = listId.replace('List','')
  const data = loadData()
  data[key].splice(index,1)
  saveData(data)
  render()
}

document.getElementById('addForm').addEventListener('submit',e=>{
  e.preventDefault()
  const section = document.getElementById('sectionSelect').value
  const title = document.getElementById('itemTitle').value.trim()
  const url = document.getElementById('itemUrl').value.trim()
  const notes = document.getElementById('itemNotes').value.trim()
  if(!title) return
  const data = loadData()
  data[section].push({title,url,notes})
  saveData(data)
  document.getElementById('addForm').reset()
  render()
})

render()
