'use client'

import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiSocketdotio, SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs } from 'react-icons/si'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  youtubeVideoId: string;
}

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: 'Basic' | 'Intermediate' | 'Advanced';
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Nền tảng thương mại điện tử với đầy đủ tính năng thanh toán, quản lý đơn hàng và tích hợp API bên thứ ba.',
    image: '/project1.jpg',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io', 'Real-time Chat'],
    youtubeVideoId: 'ntKkVrQqBYY'
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    description: 'Dashboard phân tích dữ liệu mạng xã hội với biểu đồ tương tác và báo cáo thời gian thực.',
    image: '/project2.jpg',
    technologies: ['TypeScript', 'Next.js', 'D3.js', 'Firebase', 'Tailwind CSS'],
    youtubeVideoId: 'LMG0jvBtCb4'
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Ứng dụng quản lý công việc với tính năng real-time collaboration và tích hợp calendar.',
    image: '/project3.jpg',
    technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io', 'Docker'],
    youtubeVideoId: '77F40pVTASo'
  }
];

const skills: Skill[] = [
  {
    name: 'MongoDB',
    icon: <SiMongodb className="text-4xl text-green-500" />,
    level: 'Advanced'
  },
  {
    name: 'Express.js',
    icon: <SiExpress className="text-4xl text-gray-800 dark:text-white" />,
    level: 'Advanced'
  },
  {
    name: 'React',
    icon: <SiReact className="text-4xl text-blue-500" />,
    level: 'Advanced'
  },
  {
    name: 'Node.js',
    icon: <SiNodedotjs className="text-4xl text-green-600" />,
    level: 'Advanced'
  },
  {
    name: 'Socket.io',
    icon: <SiSocketdotio className="text-4xl text-black dark:text-white" />,
    level: 'Intermediate'
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className="text-4xl text-blue-600" />,
    level: 'Advanced'
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript className="text-4xl text-yellow-400" />,
    level: 'Advanced'
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs className="text-4xl text-black dark:text-white" />,
    level: 'Advanced'
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-4xl text-cyan-500" />,
    level: 'Advanced'
  }
];

const Home: React.FC = () => {
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 }
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Xử lý form submit ở đây
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center">
        <motion.h1 
          className="text-4xl md:text-7xl font-extrabold mb-4 text-pink-500 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Profile
        </motion.h1>
        <div className="relative w-32 h-32 mb-8 rounded-full overflow-hidden">
          <Image
            src="/avatar.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <motion.div 
          className="text-3xl md:text-5xl font-bold text-yellow-300 mb-8 overflow-hidden whitespace-nowrap drop-shadow-[0_0_10px_#fff]"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ 
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          Hello, My name is Lê Công Minh. A Software Engineer FullStack and my expertise is JS, TS, C#, MERN, MongoDB, SQL
        </motion.div>
        <div className="flex gap-4">
          <a href="https://github.com/newbiecodexD" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/minh-l%C3%AA-58976325b/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary">
            <FaLinkedin />
          </a>
          <a href="https://x.com/LeCongM02127579" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary">
            <FaTwitter />
          </a>
          <a href="https://facebook.com/minhlebin11072001" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary">
            <FaFacebook />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Về Tôi</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Tôi là một Full Stack Developer với hơn 5 năm kinh nghiệm trong việc phát triển web và ứng dụng.
            Tôi đam mê tạo ra những sản phẩm chất lượng cao và trải nghiệm người dùng tuyệt vời.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Với kiến thức sâu rộng về cả frontend và backend, tôi có thể xây dựng các ứng dụng web hoàn chỉnh
            từ đầu đến cuối, đảm bảo hiệu suất, bảo mật và khả năng mở rộng.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-8 text-center">Kỹ Năng</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                {skill.icon}
                <h3 className="text-xl font-semibold mt-4">{skill.name}</h3>
                <span className={`mt-2 px-3 py-1 rounded-full text-sm ${
                  skill.level === 'Advanced' ? 'bg-green-100 text-green-800' :
                  skill.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {skill.level}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Dự Án</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Công nghệ sử dụng:</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => {
                      const techIcons: { [key: string]: React.ReactNode } = {
                        'MongoDB': <SiMongodb className="text-xl text-green-500" />,
                        'Express.js': <SiExpress className="text-xl text-gray-800 dark:text-white" />,
                        'React': <SiReact className="text-xl text-blue-500" />,
                        'Node.js': <SiNodedotjs className="text-xl text-green-600" />,
                        'Socket.io': <SiSocketdotio className="text-xl text-black dark:text-white" />,
                        'Real-time Chat': <SiSocketdotio className="text-xl text-black dark:text-white" />,
                        'TypeScript': <SiTypescript className="text-xl text-blue-600" />,
                        'JavaScript': <SiJavascript className="text-xl text-yellow-400" />,
                        'Next.js': <SiNextdotjs className="text-xl text-black dark:text-white" />,
                        'Tailwind CSS': <SiTailwindcss className="text-xl text-cyan-500" />
                      };

                      return (
                        <div
                          key={index}
                          className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                        >
                          {techIcons[tech] || null}
                          <span className="text-sm">{tech}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {project.youtubeVideoId && (
                  <div className="aspect-video mb-4">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${project.youtubeVideoId}`}
                      title={`Video demo ${project.title}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-8 text-center">Liên Hệ</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl font-semibold text-primary">
            minhlebin11072001@gmail.com
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://facebook.com/minhlebin11072001" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary">
              <FaFacebook />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 
