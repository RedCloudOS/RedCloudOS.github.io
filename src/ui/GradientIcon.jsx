import React, { useId } from "react"

export function GradientIcon({ Icon, size = 32 }) {
  const gradientId = useId()

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="overflow-visible"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ff4d4d" />
          <stop offset="50%" stopColor="#ff0000" />
          <stop offset="100%" stopColor="#b30000" />
        </linearGradient>
      </defs>

      <Icon
        size={size}
        stroke={`url(#${gradientId})`}
        fill="none"
      />
    </svg>
  )
}
