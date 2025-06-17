export default function Skills() {
  const skills = [
    { name: 'HTML', icon: '/images/icons/html.png', proficiency: 90 },
    { name: 'CSS', icon: '/images/icons/css.png', proficiency: 85 },
    { name: 'JavaScript', icon: '/images/icons/javascript.png', proficiency: 80 },
    { name: 'React', icon: '/images/icons/react.png', proficiency: 75 },
    { name: 'Tailwind CSS', icon: '/images/icons/tailwind.png', proficiency: 70 },
    { name: 'ExpressJS', icon: '/images/icons/expressjs.png', proficiency: 65 },
    { name: 'NodeJS', icon: '/images/icons/nodejs.png', proficiency: 70 },
    { name: 'MongoDB', icon: '/images/icons/mongodb.png', proficiency: 60 },
    { name: 'Git', icon: '/images/icons/git.png', proficiency: 75 },
    { name: 'Python', icon: '/images/icons/python.png', proficiency: 65 },
    { name: 'Django', icon: '/images/icons/django.png', proficiency: 60 },
    { name: 'PostgreSQL', icon: '/images/icons/postgresql.png', proficiency: 55 },
    { name: 'Docker', icon: '/images/icons/docker.png', proficiency: 50 },
    { name: 'AWS', icon: '/images/icons/aws.png', proficiency: 45 },
    { name: 'GraphQL', icon: '/images/icons/graphql.png', proficiency: 50 },
    { name: 'TypeScript', icon: '/images/icons/typescript.png', proficiency: 60 },
    { name: 'Next.js', icon: '/images/icons/nextjs.png', proficiency: 55 },
    { name: 'Redux', icon: '/images/icons/redux.png', proficiency: 50 },
    { name: 'Bootstrap', icon: '/images/icons/bootstrap.png', proficiency: 65 },
    { name: 'FastAPI', icon: '/images/icons/fastapi.png', proficiency: 55 },
    { name: 'Flask', icon: '/images/icons/flask.png', proficiency: 50 },    
  ];

  return (
    <section id="skills" className="py-16 px-4 md:px-16 bg-black text-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-900 rounded-lg shadow-md p-6">
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-black rounded-full h-2.5">
                <div
                  className="bg-gray-50 h-2.5 rounded-full"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-400 mt-2">{skill.proficiency}% Proficiency</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}