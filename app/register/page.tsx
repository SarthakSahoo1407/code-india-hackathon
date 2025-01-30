"use client"

import { useState } from "react"
import { useForm, useFieldArray, Controller } from "react-hook-form"
import { motion, AnimatePresence } from "framer-motion"

type FormData = {
  teamName: string
  leader: {
    name: string
    email: string
  }
  members: {
    name: string
  }[]
  techStack: string[]
}

const techOptions = ["React", "Node.js", "Python", "Java", "C++", "Ruby", "Go", "PHP"]

export default function Register() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      members: [{ name: "" }],
      techStack: [],
    },
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: "members",
  })
  const [submitted, setSubmitted] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  const onSubmit = (data: FormData) => {
    console.log(data)
    setSubmitted(true)
  }

  const formSteps = [
    { title: "Team Info", fields: ["teamName"] },
    { title: "Team Leader", fields: ["leader.name", "leader.email"] },
    { title: "Team Members", fields: ["members"] },
    { title: "Tech Stack", fields: ["techStack"] },
  ]

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, formSteps.length - 1))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0))

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-900">
      <motion.h1
        className="text-4xl font-bold mb-8 text-blue-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Register for Code India
      </motion.h1>

      {submitted ? (
        <motion.div
          className="text-2xl text-green-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Thank you for registering!
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg space-y-6">
          <div className="flex justify-between mb-4">
            {formSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className={`text-sm ${index === currentStep ? "text-blue-400" : "text-gray-400"}`}
                animate={{ scale: index === currentStep ? 1.1 : 1 }}
              >
                {step.title}
              </motion.div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep === 0 && (
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <label htmlFor="teamName" className="block text-blue-300">
                    Team Name
                  </label>
                  <input
                    {...register("teamName", { required: "Team name is required" })}
                    className="w-full p-2 bg-gray-800 rounded text-white"
                  />
                  {errors.teamName && <span className="text-red-500">{errors.teamName.message}</span>}
                </motion.div>
              )}

              {currentStep === 1 && (
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-xl font-semibold text-blue-300">Team Leader</h2>
                  <div>
                    <label htmlFor="leaderName" className="block text-blue-300">
                      Name
                    </label>
                    <input
                      {...register("leader.name", { required: "Leader name is required" })}
                      className="w-full p-2 bg-gray-800 rounded text-white"
                    />
                    {errors.leader?.name && <span className="text-red-500">{errors.leader.name.message}</span>}
                  </div>
                  <div>
                    <label htmlFor="leaderEmail" className="block text-blue-300">
                      Email
                    </label>
                    <input
                      {...register("leader.email", {
                        required: "Leader email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="w-full p-2 bg-gray-800 rounded text-white"
                    />
                    {errors.leader?.email && <span className="text-red-500">{errors.leader.email.message}</span>}
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-xl font-semibold text-blue-300">Team Members</h2>
                  {fields.map((field, index) => (
                    <motion.div
                      key={field.id}
                      className="flex space-x-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <input
                        {...register(`members.${index}.name` as const, { required: "Member name is required" })}
                        className="flex-grow p-2 bg-gray-800 rounded text-white"
                        placeholder="Member name"
                      />
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="bg-red-600 px-2 rounded hover:bg-red-700 transition duration-300"
                      >
                        X
                      </button>
                    </motion.div>
                  ))}
                  <motion.button
                    type="button"
                    onClick={() => append({ name: "" })}
                    className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add Member
                  </motion.button>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-xl font-semibold text-blue-300">Tech Stack</h2>
                  <div className="grid grid-cols-2 gap-2">
                    {techOptions.map((tech) => (
                      <label key={tech} className="flex items-center space-x-2 bg-gray-800 p-2 rounded">
                        <Controller
                          name="techStack"
                          control={control}
                          render={({ field }) => (
                            <input
                              type="checkbox"
                              onChange={(e) =>
                                field.onChange(
                                  e.target.checked
                                    ? [...field.value, tech]
                                    : field.value.filter((value) => value !== tech),
                                )
                              }
                              checked={field.value.includes(tech)}
                              className="form-checkbox h-5 w-5 text-blue-600"
                            />
                          )}
                        />
                        <span>{tech}</span>
                      </label>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-6">
            <motion.button
              type="button"
              onClick={prevStep}
              className="bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={currentStep === 0}
            >
              Previous
            </motion.button>
            {currentStep < formSteps.length - 1 ? (
              <motion.button
                type="button"
                onClick={nextStep}
                className="bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next
              </motion.button>
            ) : (
              <motion.button
                type="submit"
                className="bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Registration
              </motion.button>
            )}
          </div>
        </form>
      )}
    </div>
  )
}

