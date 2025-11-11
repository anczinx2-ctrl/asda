import { motion } from "framer-motion";

interface AnimatedGreenRobotProps {
  size?: number;
  color?: string;
  animationSpeed?: number;
}

export default function AnimatedGreenRobot({
  size = 800,
  color = "#00FF00",
  animationSpeed = 2,
}: AnimatedGreenRobotProps) {
  return (
    <div
      style={{
        position: "absolute",
        right: "20px",
        bottom: "60px",
        width: `${size * 0.18}px`,
        height: `${size * 0.25}px`,
        pointerEvents: "none",
        zIndex: 50,
      }}
    >
      <motion.svg
        viewBox="0 0 200 300"
        style={{
          width: "100%",
          height: "100%",
          filter: "drop-shadow(0 0 10px rgba(0,255,0,0.6))",
        }}
        animate={{
          filter: [
            "drop-shadow(0 0 10px rgba(0,255,0,0.6))",
            "drop-shadow(0 0 20px rgba(0,255,0,0.9))",
            "drop-shadow(0 0 10px rgba(0,255,0,0.6))",
          ],
        }}
        transition={{
          duration: animationSpeed * 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.g
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{
            duration: animationSpeed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* === BODY (Wireframe cylinder) === */}
          <rect
            x="80"
            y="50"
            width="40"
            height="120"
            rx="10"
            stroke={color}
            strokeWidth="2.5"
            fill="none"
          />
          {/* Horizontal lines */}
          {[70, 90, 110, 130, 150].map((y) => (
            <line
              key={y}
              x1="80"
              y1={y}
              x2="120"
              y2={y}
              stroke={color}
              strokeWidth="1"
              opacity="0.6"
            />
          ))}
          {/* Vertical divisions */}
          <line x1="90" y1="50" x2="90" y2="170" stroke={color} strokeWidth="1" opacity="0.6" />
          <line x1="100" y1="50" x2="100" y2="170" stroke={color} strokeWidth="1" opacity="0.6" />
          <line x1="110" y1="50" x2="110" y2="170" stroke={color} strokeWidth="1" opacity="0.6" />

          {/* Eye/Sensor */}
          <motion.circle
            cx="100"
            cy="85"
            r="8"
            stroke={color}
            strokeWidth="2"
            fill="none"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: animationSpeed * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.circle
            cx="100"
            cy="85"
            r="3"
            fill={color}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: animationSpeed * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* === LEGS (3 articulated limbs) === */}

          {/* LEFT LEG */}
          <motion.g
            animate={{
              rotate: [-6, 6, -6],
            }}
            transition={{
              duration: animationSpeed,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ originX: "80px", originY: "170px" }}
          >
            {/* Upper segment */}
            <line
              x1="80"
              y1="170"
              x2="55"
              y2="210"
              stroke={color}
              strokeWidth="2.5"
              fill="none"
            />
            {/* Knee joint */}
            <circle cx="55" cy="210" r="5" stroke={color} strokeWidth="2" fill="none" />
            {/* Lower segment */}
            <line
              x1="55"
              y1="210"
              x2="45"
              y2="250"
              stroke={color}
              strokeWidth="2.5"
              fill="none"
            />
            {/* Foot */}
            <path
              d="M35 250 L55 250 L50 255 Z"
              stroke={color}
              strokeWidth="2"
              fill="none"
            />
          </motion.g>

          {/* RIGHT LEG */}
          <motion.g
            animate={{
              rotate: [6, -6, 6],
            }}
            transition={{
              duration: animationSpeed,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ originX: "120px", originY: "170px" }}
          >
            <line
              x1="120"
              y1="170"
              x2="145"
              y2="210"
              stroke={color}
              strokeWidth="2.5"
            />
            <circle cx="145" cy="210" r="5" stroke={color} strokeWidth="2" fill="none" />
            <line
              x1="145"
              y1="210"
              x2="155"
              y2="250"
              stroke={color}
              strokeWidth="2.5"
            />
            <path
              d="M145 250 L165 250 L160 255 Z"
              stroke={color}
              strokeWidth="2"
              fill="none"
            />
          </motion.g>

          {/* CENTER LEG (static stabilizer with bounce) */}
          <motion.g
            animate={{
              y: [-3, 3, -3],
            }}
            transition={{
              duration: animationSpeed * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <line
              x1="100"
              y1="170"
              x2="100"
              y2="240"
              stroke={color}
              strokeWidth="2.5"
            />
            <ellipse
              cx="100"
              cy="245"
              rx="8"
              ry="3"
              stroke={color}
              strokeWidth="2.5"
              fill="none"
            />
          </motion.g>
        </motion.g>
      </motion.svg>
    </div>
  );
}
