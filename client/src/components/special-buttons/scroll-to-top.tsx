import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

type ScrollToTopButtonProps = {
  targetRef: React.RefObject<HTMLElement>;
};

export default function ScrollToTopButton({ targetRef }: ScrollToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (targetRef.current) {
      const scrollTop = targetRef.current.scrollTop;
      setIsVisible(scrollTop > 200); // Show button after scrolling 200px
    }
  };

  const scrollToTop = () => {
    if (targetRef.current) {
      targetRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const targetElement = targetRef.current;
    if (targetElement) {
      targetElement.addEventListener("scroll", handleScroll);
      return () => {
        targetElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, [targetRef]);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="absolute bottom-0 right-5 p-2 bg-foreground text-background rounded-full shadow-lg"
      >
        <ArrowUp size={24} />
      </button>
    )
  );
}
