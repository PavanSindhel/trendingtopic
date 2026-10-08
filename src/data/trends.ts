export type Trend = {
  id: string; name: string; slug: string; score: number; change: number;
  rank: number; category: string; description: string; updatedAt: string;
  why: string; history: number[];
};

export const trends: Trend[] = [
  { id:'t01', name:'Artificial Intelligence', slug:'artificial-intelligence', score:96, change:42, rank:1, category:'Technology', description:'The latest AI releases, tools and debates shaping how people work and create.', updatedAt:'4 min ago', why:'A wave of new model releases and practical AI tools has pushed the conversation into workplaces, classrooms and creative communities. People are comparing what these systems can do and asking how quickly everyday workflows will change.', history:[61,68,72,80,96] },
  { id:'t02', name:'Cricket', slug:'cricket', score:91, change:28, rank:2, category:'Sports', description:'Match-day moments, team news and the conversations around cricket.', updatedAt:'8 min ago', why:'A packed international schedule and a tense finish in today’s match have sent searches and social conversation surging.', history:[48,58,63,74,91] },
  { id:'t03', name:'India', slug:'india', score:88, change:18, rank:3, category:'Society', description:'The people, decisions and moments drawing attention across India.', updatedAt:'12 min ago', why:'A mix of national headlines, regional stories and sporting moments is bringing conversations about India to the forefront.', history:[69,73,76,82,88] },
  { id:'t04', name:'Stock Market', slug:'stock-market', score:84, change:15, rank:4, category:'Business', description:'Market moves, company results and the ideas investors are following.', updatedAt:'16 min ago', why:'Investors are reacting to fresh earnings and shifting expectations, prompting a broad discussion about what comes next.', history:[57,63,71,77,84] },
  { id:'t05', name:'Technology', slug:'technology', score:79, change:12, rank:5, category:'Technology', description:'The products and breakthroughs changing how the world works.', updatedAt:'20 min ago', why:'Product announcements and conversations about the next generation of personal technology are lifting the topic.', history:[59,61,68,73,79] },
  { id:'t06', name:'Movies', slug:'movies', score:75, change:22, rank:6, category:'Culture', description:'New releases, performances and the stories viewers can’t stop discussing.', updatedAt:'24 min ago', why:'A major release has sparked strong audience reactions, reviews and box-office speculation.', history:[38,45,53,66,75] },
  { id:'t07', name:'Politics', slug:'politics', score:71, change:9, rank:7, category:'Society', description:'Policy, public debate and the political stories people are tracking.', updatedAt:'31 min ago', why:'A developing policy debate is drawing attention from across the political spectrum.', history:[61,64,66,68,71] },
  { id:'t08', name:'Football', slug:'football', score:68, change:17, rank:8, category:'Sports', description:'Fixtures, transfers and the moments football fans are sharing.', updatedAt:'38 min ago', why:'A run of high-stakes fixtures has created fresh debate around form, tactics and team selection.', history:[44,48,56,60,68] },
  { id:'t09', name:'Space', slug:'space', score:63, change:31, rank:9, category:'Science', description:'Missions, discoveries and a closer look at what lies beyond Earth.', updatedAt:'45 min ago', why:'New mission imagery and an update from researchers have reignited interest in a landmark space project.', history:[26,34,41,52,63] },
  { id:'t10', name:'Weather', slug:'weather', score:60, change:-12, rank:10, category:'Science', description:'Forecasts and extreme-weather stories affecting daily life.', updatedAt:'52 min ago', why:'People are checking local forecasts as changing conditions move across several regions.', history:[82,74,71,67,60] },
  { id:'t11', name:'Business', slug:'business', score:57, change:6, rank:11, category:'Business', description:'Company decisions, leadership moves and the forces shaping business.', updatedAt:'1 hr ago', why:'Quarterly updates and a notable leadership announcement have brought business news into focus.', history:[49,50,53,55,57] },
  { id:'t12', name:'Gaming', slug:'gaming', score:54, change:14, rank:12, category:'Culture', description:'Games, studios and the communities shaping play.', updatedAt:'1 hr ago', why:'A showcase announcement has gamers comparing upcoming releases and sharing their wish lists.', history:[32,38,42,48,54] },
  { id:'t13', name:'Startups', slug:'startups', score:50, change:8, rank:13, category:'Business', description:'Young companies, new ideas and the people building what’s next.', updatedAt:'1 hr ago', why:'A new funding round has renewed interest in the founders and ideas behind a growing sector.', history:[36,39,43,46,50] },
  { id:'t14', name:'Education', slug:'education', score:47, change:3, rank:14, category:'Society', description:'Learning, schools and the ideas changing education.', updatedAt:'2 hrs ago', why:'A proposed change to learning policy has prompted discussion among students, families and educators.', history:[39,40,42,45,47] },
  { id:'t15', name:'Electric Vehicles', slug:'electric-vehicles', score:44, change:-4, rank:15, category:'Technology', description:'EV launches, charging and the shift to electric mobility.', updatedAt:'2 hrs ago', why:'New pricing and charging updates are keeping electric mobility in the conversation.', history:[54,51,48,46,44] },
  { id:'t16', name:'Science', slug:'science', score:41, change:11, rank:16, category:'Science', description:'Research and discoveries that help us understand the world.', updatedAt:'2 hrs ago', why:'A widely shared research finding has made a complex scientific story accessible to a broader audience.', history:[24,28,31,37,41] },
  { id:'t17', name:'AI Regulation', slug:'ai-regulation', score:39, change:19, rank:17, category:'Technology', description:'The rules and public policy shaping artificial intelligence.', updatedAt:'3 hrs ago', why:'Lawmakers and technology companies are responding to new questions about transparency and accountability.', history:[22,27,30,34,39] },
  { id:'t18', name:'AI Tools', slug:'ai-tools', score:36, change:24, rank:18, category:'Technology', description:'Useful AI products for research, design, writing and everyday work.', updatedAt:'3 hrs ago', why:'A new batch of accessible tools is prompting people to share workflows and compare results.', history:[18,22,25,30,36] },
  { id:'t19', name:'AI Jobs', slug:'ai-jobs', score:33, change:7, rank:19, category:'Business', description:'How AI is changing roles, skills and the future of work.', updatedAt:'3 hrs ago', why:'New workplace research has renewed questions about which roles are changing and what skills matter next.', history:[23,26,28,31,33] },
  { id:'t20', name:'Climate', slug:'climate', score:30, change:0, rank:20, category:'Science', description:'Climate research, policy and the changes communities are experiencing.', updatedAt:'4 hrs ago', why:'A new climate report has brought long-term trends back into the daily conversation.', history:[30,31,29,30,30] },
];

export const periods = [
  { label:'Today', href:'/today', scoreFactor:1, note:'The topics gaining momentum right now.' },
  { label:'Yesterday', href:'/yesterday', scoreFactor:.91, note:'What held people’s attention yesterday.' },
  { label:'Day before yesterday', href:'/day-before-yesterday', scoreFactor:.84, note:'A look back at the conversations that carried.' },
  { label:'This week', href:'/this-week', scoreFactor:.96, note:'Stories with staying power across the week.' },
  { label:'This month', href:'/this-month', scoreFactor:.82, note:'The ideas shaping this month’s conversation.' },
  { label:'This year', href:'/this-year', scoreFactor:.73, note:'The conversations that have defined the year.' },
];

export function topicsForPeriod(factor: number) {
  return trends.map((topic, index) => ({ ...topic, score: Math.max(18, Math.round(topic.score * factor * (1 - index * .006))) }));
}
