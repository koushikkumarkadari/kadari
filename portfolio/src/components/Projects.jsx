export default function Projects() {
  const projects = [
    {
      title: 'ALGO NEST',
      description: 'Created a coding platform for 1000+ students with an interactive code editor supporting Java, Python, and C++.Designed a responsive glassmorphism UI with React and implemented JWT-based authentication and real-time leaderboards.',
      image: 'https://i.ibb.co/ZzLjksXb/image.png',
      link: 'https://github.com/Hemanth-Teja/bvrit-code-project',
    },
    {
      title: 'Washerman',
      description: 'A MERN stack laundry app for college students to place orders, washermen to process them, and admins to manage approvals and disputes, hosted on Render.com with a clean blue/white UI and Razorpay payments.',
      image: 'https://i.ibb.co/zT5jX59j/image.png',
      link: 'https://github.com/koushikkumarkadari/washerman',
    },
    {
      title: 'Telugu Comment Toxicity Detection',
      description: 'This project is a web application that classifies Telugu text as toxic or non-toxic. It uses a fine-tuned ALBERT model (indic bert toxicity classifier corrected) to predict toxicity in Telugu text',
      image: 'https://i.ibb.co/V0hmwWFn/image.png',
      link: 'https://github.com/PenchalaThilak/TeluguCommentToxicityDetection',
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 md:px-16 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-50">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <img src={project.image} alt="Project ${project.title} screenshot" className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <a href={project.link} target="_blank" className="text-blue-600 hover:underline mt-4 inline-block">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}