'use client'

import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { 
  SiMongodb, 
  SiExpress, 
  SiReact, 
  SiNodedotjs, 
  SiSocketdotio, 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiStripe,
  SiFirebase,
  SiPostgresql,
  SiDocker,
  SiRedis,
  SiFacebook
} from 'react-icons/si'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { RiLockPasswordLine } from 'react-icons/ri'
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
  githubLink?: string;
  demoLink?: string;
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
    description: 'Nền tảng thương mại điện tử với đầy đủ tính năng thanh toán, quản lý đơn hàng, giỏ hàng, đánh giá sản phẩm và tích hợp API bên thứ ba.',
    image: '/project1.jpg',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io', 'Real-time Chat', 'Payment Gateway'],
    youtubeVideoId: 'ntKkVrQqBYY',
    githubLink: 'https://github.com/yourusername/ecommerce-platform',
    demoLink: 'https://your-ecommerce-demo.com'
  },
  {
    id: 2,
    title: 'Todo App',
    description: 'Ứng dụng quản lý công việc với tính năng tạo, chỉnh sửa, xóa task, phân loại theo priority, deadline và tích hợp calendar.',
    image: '/project2.jpg',
    technologies: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Firebase', 'React Query'],
    youtubeVideoId: 'jBmrduvKl5w',
    githubLink: 'https://github.com/yourusername/todo-app',
    demoLink: 'https://your-todo-app-demo.com'
  },
  {
    id: 3,
    title: 'Management System',
    description: 'Hệ thống quản lý doanh nghiệp với các module quản lý nhân viên, dự án, tài chính và báo cáo thống kê.',
    image: '/project3.jpg',
    technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Docker', 'Redis', 'JWT'],
    youtubeVideoId: 'CEx9VM0bIlg',
    githubLink: 'https://github.com/yourusername/management-system',
    demoLink: 'https://your-management-system-demo.com'
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
  'Tailwind CSS': <SiTailwindcss className="text-xl text-cyan-500" />,
  'Payment Gateway': <SiStripe className="text-xl text-purple-500" />,
  'Firebase': <SiFirebase className="text-xl text-orange-500" />,
  'PostgreSQL': <SiPostgresql className="text-xl text-blue-400" />,
  'Docker': <SiDocker className="text-xl text-blue-600" />,
  'Redis': <SiRedis className="text-xl text-red-500" />,
  'JWT': <RiLockPasswordLine className="text-xl text-purple-400" />
};

const Home: React.FC = () => {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Confetti effect
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 }
    });

    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Xử lý form submit ở đây
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.section 
        className="min-h-[80vh] flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
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
          <a href="https://facebook.com/knight.debugging" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary">
            <SiFacebook />
          </a>
        </div>
        <motion.div 
          className="mt-8 space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">🎓</span>
              <p className="text-lg font-semibold">Cử nhân Công nghệ Thông tin</p>
            </div>
            <p className="text-gray-200 text-xl">Đại học Ngoại Ngữ - Tin Học (HUFLIT) - (2022-2026)</p>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">📚</span>
              <p className="text-lg font-semibold">TOEIC 800+</p>
            </div>
            <p className="text-gray-200 text-xl">Chứng chỉ tiếng Anh giao tiếp quốc tế</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">🏆</span>
              <p className="text-lg font-semibold">AWS Certified Developer</p>
            </div>
            <p className="text-gray-200 text-xl">Amazon Web Services</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">💻</span>
              <p className="text-lg font-semibold">MERN Stack Developer</p>
            </div>
            <p className="text-gray-200 text-xl">Chứng chỉ Full Stack Development</p>
          </div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
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
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="py-16 bg-gray-50 dark:bg-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
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
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
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

                <div className="flex gap-4 mb-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <FaGithub className="text-xl" />
                      <span>Source Code</span>
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                    >
                      <BsBoxArrowUpRight className="text-xl" />
                      <span>Live Demo</span>
                    </a>
                  )}
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
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="py-16 bg-gray-50 dark:bg-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Liên Hệ</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl font-semibold text-primary">
            minhlebin11072001@gmail.com
          </p>
        </div>
      </motion.section>
    </div>
  )
}

export default Home 
