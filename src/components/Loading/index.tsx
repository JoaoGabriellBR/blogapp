import { PropsLoading } from "@/services/Interfaces";

export default function Loading({ color, size }: PropsLoading) {

  const styles = `rounded-full animate-pulse ${color ? color : "dark:bg-indigo-500"
    } ${size ? size : "w-4 h-4"}`;

  return (
    <div className="flex items-center justify-center space-x-2 h-screen">
      <div className={styles}></div>
      <div className={styles}></div>
      <div className={styles}></div>
    </div>
  );
}
