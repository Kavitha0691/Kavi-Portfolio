"use client"

import { Project } from "@/Data/types"
import { projects } from "@/Data/projects"
import { Play } from "lucide-react"
import { useState } from "react"

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <section
      id="projects"
      className="min-h-screen bg-white py-14 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
          My Projects
        </h2>
        <p className="mt-6 text-gray-600 dark:text-gray-400 text-center">
          A selection of projects I’ve built using modern web technologies.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-1 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 rounded-2xl shadow-md bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition"
            >
              <div
                className="relative w-full mb-10 cursor-pointer group"
                onClick={() => setActiveVideo(project.video)}
              >
                <img
                  src={project.desktop}
                  alt={`${project.title} desktop`}
                  className="w-full rounded-lg shadow object-contain aspect-video transform transition duration-300 group-hover:scale-105"
                />
                <img
                  src={project.mobile}
                  alt={`${project.title} mobile`}
                  className="absolute -bottom-6 -right-4 w-1/4 max-w-[80px] rounded-lg shadow-lg border-2 border-gray-400 dark:border-gray-900 object-contain transform transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <img
                    src="/playy.png"
                    alt="Play demo"
                    className="w-12 h-12 drop-shadow-lg pointer-events-none select-none"
                  />
                </div>

              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-xs font-medium rounded-lg bg-gray-600 text-white dark:bg-gray-800 dark:text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-blue-600 dark:text-indigo-400 font-semibold hover:underline"
              >
                View Page
              </a>
            </div>
          ))}
        </div>
      </div>
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative bg-black rounded-xl overflow-hidden w-[90%] max-w-4xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-10 text-white bg-gray-800/70 hover:bg-red-500 rounded-full p-2 transition"
            >
              ✖
            </button>
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </section>
  )
}
