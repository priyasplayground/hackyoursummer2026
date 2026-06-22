const data = {
  readStanford: [
    {title: 'CS230: Deep Learning | Autumn 2025', url: 'https://lnkd.in/dQ-DHdsJ', notes: ''},
    {title: 'CS329H: Machine Learning from Human Preferences', url: 'https://lnkd.in/d_6GzDAr', notes: ''},
    {title: 'CS25: Transformers', url: 'https://lnkd.in/dbMtpim5', notes: ''},
    {title: 'CS231N: Deep Learning for Computer Vision | 2025', url: 'https://lnkd.in/djXeGyse', notes: ''},
    {title: 'CME295: LLM Evaluation | Autumn 2025', url: 'https://lnkd.in/dTPTwh_M', notes: ''},
    {title: 'CS336: Language Modeling from Scratch | 2025', url: 'https://lnkd.in/dthjnD7E', notes: ''}
  ],
  readHarvard: [
    {title: 'Introduction to Generative AI', url: 'https://lnkd.in/e9rWNjBE', notes: 'Step-by-step breakdown of how GenAI actually works.'},
    {title: 'Prompt Engineering', url: 'https://lnkd.in/e5nekvS2', notes: 'Real techniques for better output from any LLM.'},
    {title: 'Beyond Chatbots: System Prompts + RAG', url: 'https://lnkd.in/exsX5tP7', notes: 'Past surface-level use. Into scalable applications.'},
    {title: 'Generative AI in Teaching & Learning', url: 'https://lnkd.in/erdwPRvu', notes: 'For educators and trainers leading with AI.'},
    {title: 'Teaching with AI in the Classroom', url: 'https://lnkd.in/eWXskwWG', notes: 'Frameworks built for instructional design.'},
    {title: 'The Basics of Generative AI', url: 'https://lnkd.in/eSCJ62Bi', notes: 'No jargon. Just clarity.'},
    {title: 'CS50x 2025 – AI Lecture', url: 'https://lnkd.in/eYg6vdCr', notes: 'LLMs, neural nets, real-world use cases.'},
    {title: 'CS50 – AI / Prompt Engineering', url: 'https://lnkd.in/eJH4DWQR', notes: 'Design prompts that think with you.'},
    {title: 'GPT-4: How it works + how to build with it', url: 'https://lnkd.in/eeh7QXUM', notes: 'Behind the curtain on GPT-4.'},
    {title: 'LLMs and the End of Programming', url: 'https://lnkd.in/e3JbSFi7', notes: 'Why prompting is the new coding.'}
  ],
  readAnthropic: [
    {title: 'Anthropic Skills Learning Guide', url: 'https://www.anthropic.com/skills', notes: 'Structured learning paths for AI safety, systems, and product design.'},
    {title: 'Anthropic model use principles', url: 'https://www.anthropic.com/', notes: 'Best practices for building safe AI products.'},
    {title: 'Prompting fundamentals', url: '', notes: 'Tactics for prompt engineering and reliable model behavior.'}
  ],
  recordings: [],
  demos: [],
  ideas: []
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
      title.rel = 'noopener noreferrer'
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
