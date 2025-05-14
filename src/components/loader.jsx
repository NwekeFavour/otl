import { motion } from "framer-motion"

function Loader() {
    return (
        <div className="container">
            <motion.div
                className="spinner"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            <StyleSheet />
        </div>
    )
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
    return (
        <style>
            {`
           .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;  // Full viewport height
            background-color: rgba(0, 0, 0, 0.1);  // Optional light background for visibility
            }

            .spinner {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 4px solid #ccc;
            border-top-color: #F48F23;  // Animated color
            will-change: transform;  // Optimize for rotation
            `}
        </style>
    )
}

export default Loader
