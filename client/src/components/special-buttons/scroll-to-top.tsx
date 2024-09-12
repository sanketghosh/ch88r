import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

type ScrollToTopButtonProps = {
  targetRef: React.RefObject<HTMLElement>;
};

export default function ScrollToTopButton({
  targetRef,
}: ScrollToTopButtonProps) {
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
      <Button
        onClick={scrollToTop}
        className="sticky bottom-28 left-[32rem] z-10 md:bottom-20 md:left-[22rem]"
        size={"icon"}
      >
        <ArrowUp size={24} />
      </Button>
    )
  );
}
