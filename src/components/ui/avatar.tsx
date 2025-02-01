import {cn} from "@/libs/cn";
import {createMemo, mergeProps, Show, splitProps, Switch} from "solid-js";

interface AvatarProps {
  name: string;
  src?: string;
  size?: number; // Dynamic size in pixels
  class?: string; // Additional styles if needed
}

const colors = [
  "#F87171", "#FACC15", "#4ADE80", "#60A5FA", "#A78BFA", "#F472B6",
  "#FB923C", "#34D399", "#818CF8", "#F59E0B", "#EC4899", "#10B981"
];

const Avatar = (props: AvatarProps) => {

  const merged = mergeProps({size: 45}, props)

  const getInitials = (name: string) => {
    const words = name.trim().split(" ");
    return words.length > 1
      ? `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase()
      : words[0][0].toUpperCase();
  };

  const bgColor = createMemo(() => {
    let hash = 0;
    for(let i = 0; i < merged.name.length; i++) {
      hash = merged.name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  });

  return (
    <div
      class={cn(`flex items-center justify-center rounded-full  text-white overflow-hidden font-bold`, merged.class)}
      style={{
        width: merged.size + 'px',
        height: merged.size + 'px',
        'font-size': (merged.size * 0.4) + 'px',
        "background-color": bgColor()
      }}
    >
      <Show when={merged.src}
        fallback={<>{getInitials(merged.name)}</>}
      >
        <img
          src={merged.src}
          alt={merged.name}
          class="w-full h-full object-cover"
        />
      </Show>
    </div>
  );
};

export default Avatar;
