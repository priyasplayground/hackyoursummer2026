const data = {
  readStanford: [
    {title: 'CS 106A: Programming Methodology', url: 'https://cs50.harvard.edu/x/2026/', notes: 'Introductory programming course with Python and C'},
    {title: 'CS 107: Programming Paradigms', url: 'https://cs107.stanford.edu/', notes: 'Systems programming and C++ fundamentals'}
  ],
  readHarvard: [
    {title: 'CS50: Introduction to Computer Science', url: 'https://cs50.harvard.edu/x/2026/', notes: 'Foundational course covering algorithms, data structures, and web development'},
    {title: 'CS164: Software Engineering', url: 'https://cs164.cs.harvard.edu/', notes: 'Project-based software engineering practices'}
  ],
  readAnthropic: [
    {title: 'Anthropic Skills Learning Guide', url: 'https://www.anthropic.com/skills', notes: 'Resources and learning frameworks from Anthropic'},
    {title: 'AI safety and collaboration resources', url: 'https://www.anthropic.com/', notes: 'Frameworks for responsible AI development'}
  ],
  recordings: [
    {title: 'Opening keynote — 2026', url: '', notes: 'Zoom recording (add link)'},
    {title: 'Guest speaker session', url: '', notes: 'Add recording link once available'}
  ],
  demos: [
    {title: 'Project A demo', url: '', notes: 'Slides + code in README'},
    {title: 'Interactive UI walkthrough', url: '', notes: 'Live demo planned for the final day'}
  ],
  ideas: [
    {title: 'Smart recycling bin', url: '', notes: 'Team brainstorm idea'},
    {title: 'Community health tracker', url: '', notes: 'Project idea to visualize local wellness'}
  ]
}

function render() {
  renderList('readStanfordList', data.readStanford)
  renderList('readHarvardList', data.readHarvard)
  renderList('readAnthropicList', data.readAnthropic)
  renderList('recordingsList', data.recordings)
  renderList('demosList', data.demos)
  renderList('ideasList', data.ideas)
}

function renderList(elId, items) {
  const ul = document.getElementById(elId)
  ul.innerHTML = ''

  items.forEach(it => {
    const li = document.createElement('li')
    li.className = 'item'

    const content = document.createElement('div')
    const title = it.url ? document.createElement('a') : document.createElement('span')
    if (it.url) {
      title.href = it.url
      title.target = '_blank'
    }
    title.textContent = it.title
    content.appendChild(title)

    if (it.notes) {
      const meta = document.createElement('div')
      meta.className = 'meta'
      meta.textContent = it.notes
      content.appendChild(meta)
    }

    li.appendChild(content)
    ul.appendChild(li)
  })
}

render()
