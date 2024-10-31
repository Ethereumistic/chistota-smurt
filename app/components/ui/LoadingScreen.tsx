import { motion } from "framer-motion";
import { Logo } from "../cover/Logo";


export function LoadingScreen({ progress, onComplete }: { progress: number; onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-b from-gray-400 to-gray-300"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center space-y-8">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 0.8, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-white text-[60px]  md:text-[120px] font-montserrat drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]">ЧИСТОТА</h1>
          <div className="flex flex-row justify-center">
          <h1 className="text-black mr-4 text-[30px]  md:text-[60px] font-montserrat drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]">ИЛИ</h1>
          <h1 className="text-black text-[30px]  md:text-[60px] font-montserrat drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]">СМЪР</h1>
          <motion.div
        initial={{ rotate: 0, translateY: 0 }} // Initial state
        animate={{ rotate: 50, translateY: 6 }} // Final state
        transition={{ delay: 0.3, duration: 0.5 }} // Delay and duration for the animation
      >
        <motion.h1
          className="text-black text-[30px]  md:text-[60px] font-montserrat drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]"
        >
          Т
        </motion.h1>
      </motion.div>
          </div>
        </motion.div>
        
        {/* Progress bar container */}
        <div className="w-64 h-2 bg-gray-300 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-black"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            onAnimationComplete={() => {
              if (progress === 100) {
                onComplete();
              }
            }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  );
}