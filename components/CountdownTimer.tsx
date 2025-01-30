"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useCountdown } from "../hooks/useCountdown"

type CountdownTimerProps = {
  targetDate: string
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate)

  return (
    <div className="flex space-x-4">
      <CountdownUnit value={days} label="Days" />
      <CountdownUnit value={hours} label="Hours" />
      <CountdownUnit value={minutes} label="Minutes" />
      <CountdownUnit value={seconds} label="Seconds" />
    </div>
  )
}

type CountdownUnitProps = {
  value: number
  label: string
}

const CountdownUnit: React.FC<CountdownUnitProps> = ({ value, label }) => (
  <motion.div
    className="flex flex-col items-center"
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="text-4xl font-bold bg-blue-600 rounded-lg p-2 w-20 h-20 flex items-center justify-center"
      key={value}
      initial={{ rotateX: -90 }}
      animate={{ rotateX: 0 }}
      transition={{ duration: 0.5 }}
    >
      {value.toString().padStart(2, "0")}
    </motion.div>
    <div className="text-sm mt-1">{label}</div>
  </motion.div>
)

