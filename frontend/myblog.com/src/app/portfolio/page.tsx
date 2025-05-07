'use client';

import Image from 'next/image';
import { FaGithub, FaLinkedin, FaFacebook, FaYoutube, FaFileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';



export default function PortfolioPage() {
  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900">
      {/* Cover section */}
      <div className="relative w-full h-[400px]">
        <div className="grid grid-cols-5 w-full h-full">
            {[
            '/portfolio/bg6.jpg',
            '/portfolio/bg10.jpg',
            '/portfolio/bg12.jpg',
            '/portfolio/bg8.jpg', // ảnh trung tâm
            '/portfolio/bg7.jpg',
            ].map((src, idx) => (
            <div key={idx} className="relative w-full h-full">
                <Image
                src={src}
                alt={`Gallery ${idx}`}
                fill
                className="object-cover"
                />
            </div>
            ))}
        </div>

        {/* Overlay chia block trái/phải */}
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row"
        >

          {/* Left block: avatar */}
          <div className="w-full md:w-1/2 flex items-center justify-center md:items-end">
            <div className="relative h-[200px] md:h-full aspect-[3/4] w-auto">
              <Image
                src="/portfolio/avt2.png"
                alt="My profile"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right block: text box center */}
          <div className="w-full md:w-1/2 flex items-center justify-center px-4 py-4">
            <div className="bg-black/60 backdrop-blur-md p-4 md:p-6 rounded-xl text-white text-center max-w-[90%] min-h-[200px] flex flex-col justify-center">
            <h1 className="text-lg md:text-xl font-bold leading-snug">
              University of Information Technology (UIT) – VNU-HCM
            </h1>
            <p className="mt-2 text-sm">
              Computer Science Student – Expected Graduation: June 2025<br />
              TOEIC Certificate 3/2025: (LR: 835 / SW: 290)

            </p>


              {/* Social Icons */}
              <div className="flex justify-center gap-4 mt-4 text-white text-4xl">
                <a
                  href="https://github.com/20yud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/duyquocd19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.facebook.com/oldd1901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.youtube.com/@duygogo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500"
                >
                  <FaYoutube />
                </a>
                  {/* CV icon */}
                <a
                    href="/docs/CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400"
                >
                    <FaFileAlt />
                </a>
              </div>
            </div>
          </div>
          </motion.div>
      </div>

      <div className="p-6 space-y-12">

        {/* Nội dung bên dưới */}
        <div className="p-6 space-y-12 bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 text-white min-h-screen">

          {/* About Me + Skills chia đôi */}
          <div className="flex flex-col md:flex-row gap-6">
            
            {/* About Me */}
            <section className="w-full md:w-1/2 bg-white/10 border border-white/20 rounded-lg p-6 backdrop-blur-md shadow-md">
              <h2 className="text-2xl font-bold mb-2">About Me</h2>
              <p>
                I'm a Computer Science student at the University of Information Technology – VNU-HCM.
                I’m passionate about full-stack software development, especially systems involving AI and big data.
                I'm currently looking for opportunities to apply my skills in real-world projects and enhance my experience by collaborating in a professional environment.
              </p>
            </section>

            {/* Skills */}
            <section className="w-full md:w-1/2 bg-white/10 border border-white/20 rounded-lg p-6 backdrop-blur-md shadow-md">
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-100">
                <div><strong>Languages:</strong> Java, Python</div>
                <div><strong>Databases:</strong> MySQL, MongoDB (basic)</div>
                <div><strong>Tools:</strong> Git, Docker, VSCode</div>
                <div><strong>Concepts:</strong> REST API, MVC, DDD</div>
                <div><strong>AI/ML:</strong> TensorFlow, OpenCV, FAISS</div>
              </div>
            </section>
        </div>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Projects</h2>

          {/* Project: Vecanhac.com */}
          <div className="bg-white/10 border border-white/20 rounded-lg p-6 backdrop-blur-md shadow-md flex flex-col md:flex-row justify-between items-start gap-6 mb-8">

            {/* Right: image + button (on top in mobile) */}
            <div className="flex flex-col items-center gap-2 md:order-last w-full md:w-auto">
              <Image
                src="/project/img/vecanhacimg.png"
                alt="Vecanhac"
                width={1080}
                height={1080}
                className="object-cover rounded-lg"
              />
              <a
                href="https://github.com/20yud/vecanhac.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
              >
                Link to Github
              </a>
            </div>

            {/* Left content */}
            <div className="space-y-2 w-full">
              <h3 className="text-xl font-semibold text-yellow-300">
                Vecanhac.com <span className="text-sm font-normal text-gray-300">(1 member) – Spring 2025 – Current</span>
              </h3>

              <ul className="list-disc list-inside pl-4 text-gray-100">
                <li>Developed a full-stack web app for managing and booking concert tickets, with real-time seat display.</li>
                <li>Backend built with Java Spring Boot using DDD architecture.</li>
                <li>Frontend with Next.js, responsive design, dynamic routing.</li>
                <li>Technologies: Java, Spring Boot, JPA, Lombok, Next.js, TailwindCSS, MySQL, TypeScript.</li>
              </ul>
            </div>
          </div>

          {/* Project: MovieAI */}
          <div className="bg-white/10 border border-white/20 rounded-lg p-6 backdrop-blur-md shadow-md flex flex-col md:flex-row justify-between items-start gap-6 mb-8">

            {/* Right: image + button */}
            <div className="flex flex-col items-center gap-2 md:order-last w-full md:w-auto">
              <Image
                src="/project/img/movieaiimg.png"
                alt="MovieAI"
                width={1080}
                height={1080}
                className="object-cover rounded-lg"
              />
              <a
                href="https://github.com/20yud/MovieAI"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
              >
                Link to Github
              </a>
            </div>

            {/* Left content */}
            <div className="space-y-2 w-full">
              <h3 className="text-xl font-semibold text-yellow-300">
                MovieAI <span className="text-sm font-normal text-gray-300">(1 member) – Winter 2024</span>
              </h3>

              <ul className="list-disc list-inside pl-4 text-gray-100">
                <li>Built a movie streaming app with recommendation system based on collaborative filtering.</li>
                <li>Features: admin dashboard, user auth, rating, commenting, favorites list.</li>
                <li>Advanced filters: genre, release year, trending, top-rated.</li>
                <li>Technologies: Java Spring Boot, Python (ML), MySQL, HTML/CSS.</li>
              </ul>
            </div>
          </div>
          {/* Age Gender Prediction */}
          <div className="bg-white/10 border border-white/20 rounded-lg p-6 backdrop-blur-md shadow-md flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
            {/* Image + GitHub */}
            <div className="flex flex-col items-center gap-2 md:order-last w-full md:w-auto">
              <Image
                src="/project/img/agepredictionimg.jpg"
                alt="Age Gender Prediction"
                width={1080}
                height={1080}
                className="object-cover rounded-lg cursor-zoom-in"
              />
              <a
                href="https://github.com/20yud/Age_Gender_Prediction"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
              >
                Link to Github
              </a>
            </div>

            {/* Text */}
            <div className="space-y-2 w-full">
              <h3 className="text-xl font-semibold text-yellow-300">
                Age Gender Prediction <span className="text-sm font-normal text-gray-300">(4 members) – Summer 2024</span>
              </h3>
              <ul className="list-disc list-inside pl-4 text-gray-100">
                <li>Built a CNN-based system to predict age and gender from facial images with high accuracy.</li>
                <li>Collected, preprocessed, and labeled data; trained model with 30 epochs on Google Colab.</li>
                <li>Deployed the model to a cloud-based server using Docker for scalable access and testing.</li>
                <li>Technologies: Python (core), OpenCV, TensorFlow/Keras, Docker.</li>
              </ul>
            </div>
          </div>

          {/* FastGuard */}
          <div className="bg-white/10 border border-white/20 rounded-lg p-6 backdrop-blur-md shadow-md flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
            {/* Image + GitHub */}
            <div className="flex flex-col items-center gap-2 md:order-last w-full md:w-auto">
              <Image
                src="/project/img/fastguardimg.png"
                alt="FastGuard"
                width={1080}
                height={1080}
                className="object-cover rounded-lg cursor-zoom-in"
              />
              <a
                href="https://github.com/20yud/FastGuard"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
              >
                Link to Github
              </a>
            </div>

            {/* Text */}
            <div className="space-y-2 w-full">
              <h3 className="text-xl font-semibold text-yellow-300">
                FastGuard <span className="text-sm font-normal text-gray-300">(3 members) – Summer 2023</span>
              </h3>
              <ul className="list-disc list-inside pl-4 text-gray-100">
                <li>Built a web-based system for real-time bus tracking, route browsing, and ticket booking.</li>
                <li>Implemented admin panel for managing schedules, routes, and user registrations using full CRUD.</li>
                <li>Applied MVC architecture to ensure modularity and maintainability across the platform.</li>
                <li>Technologies: HTML5/CSS, Bootstrap 5.0, PHP/C#/ASP.NET MVC, MySQL.</li>
              </ul>
            </div>
          </div>

          {/* Legal Chatbot System */}
          <div className="bg-white/10 border border-white/20 rounded-lg p-6 backdrop-blur-md shadow-md flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
            {/* Image + GitHub */}
            <div className="flex flex-col items-center gap-2 md:order-last w-full md:w-auto">
              <Image
                src="/project/img/legalchatbotimg.png"
                alt="Legal Chatbot"
                width={1080}
                height={1080}
                className="object-cover rounded-lg cursor-zoom-in"
              />
              <a
                href="https://github.com/20yud/Legal_Chatbot_System"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
              >
                Link to Github
              </a>
            </div>

            {/* Text */}
            <div className="space-y-2 w-full">
              <h3 className="text-xl font-semibold text-yellow-300">
                Legal Chatbot System <span className="text-sm font-normal text-gray-300">(3 members) – Spring 2025</span>
              </h3>
              <ul className="list-disc list-inside pl-4 text-gray-100">
                <li>Developed a legal chatbot system for Vietnamese law document retrieval using semantic search.</li>
                <li>Built a pipeline with Bi-Encoder for vector retrieval and Cross-Encoder for reranking top results.</li>
                <li>Applied FAISS for fast vector similarity search and trained models with custom segmented datasets.</li>
                <li>Technologies: Python, HuggingFace Transformers, FAISS, Underthesea.</li>
              </ul>
            </div>
          </div>

        </section>

        </div>


        </div>

    </div>
  );
}
