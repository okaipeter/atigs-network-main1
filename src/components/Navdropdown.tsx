import React, { useEffect, useState } from "react";
import {
  FiChevronDown,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

interface TabProps {
    children: React.ReactNode;
    tab: number;
    handleSetSelected: (val: number | null) => void;
    selected: number | null;
  }

interface ContentProps {
    selected: number | null;
    dir: string | null;
  }

interface NubProps {
    selected: number | null;
  }

export const ShiftingDropDown = () => {
  return (
    <div className="flex h-14 w-1/2 justify-start bg-white px-4 text-neutral-200 md:justify-center">
      <Tabs />
    </div>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<string | null>(null);

  const handleSetSelected = (val: number | null) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2"
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected } : TabProps) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
        selected === tab
          ? " bg-neutral-800 text-neutral-100"
          : "text-neutral-400"
      }`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const Content = ({ selected, dir } : ContentProps) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }: NubProps) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    />
  );
};

// const Products = () => {
//   return (
//     <div>
//       <div className="flex gap-4">
//         <div>
//           <h3 className="mb-2 text-sm font-medium">Startup</h3>
//           <a href="#" className="mb-1 block text-sm text-neutral-400">
//             Bookkeeping
//           </a>
//           <a href="#" className="block text-sm text-neutral-400">
//             Invoicing
//           </a>
//         </div>
//         <div>
//           <h3 className="mb-2 text-sm font-medium">Scaleup</h3>
//           <a href="#" className="mb-1 block text-sm text-neutral-400">
//             Live Coaching
//           </a>
//           <a href="#" className="mb-1 block text-sm text-neutral-400">
//             Reviews
//           </a>
//           <a href="#" className="block text-sm text-neutral-400">
//             Tax/VAT
//           </a>
//         </div>
//         <div>
//           <h3 className="mb-2 text-sm font-medium">Enterprise</h3>
//           <a href="#" className="mb-1 block text-sm text-neutral-400">
//             White glove
//           </a>
//           <a href="#" className="mb-1 block text-sm text-neutral-400">
//             SOX Compliance
//           </a>
//           <a href="#" className="block text-sm text-neutral-400">
//             Staffing
//           </a>
//           <a href="#" className="block text-sm text-neutral-400">
//             More
//           </a>
//         </div>
//       </div>

//       <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
//         <span>View more</span>
//         <FiArrowRight />
//       </button>
//     </div>
//   );
// };

// const Pricing = () => {
//   return (
//     <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-700">
//       <a
//         href="#"
//         className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
//       >
//         <FiHome className="mb-2 text-xl text-indigo-300" />
//         <span className="text-xs">Startup</span>
//       </a>
//       <a
//         href="#"
//         className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
//       >
//         <FiBarChart2 className="mb-2 text-xl text-indigo-300" />
//         <span className="text-xs">Scaleup</span>
//       </a>
//       <a
//         href="#"
//         className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
//       >
//         <FiPieChart className="mb-2 text-xl text-indigo-300" />
//         <span className="text-xs">Enterprise</span>
//       </a>
//     </div>
//   );
// };

// const Blog = () => {
//   return (
//     <div>
//       <div className="grid grid-cols-2 gap-2">
//         <a href="#">
//           <img
//             className="mb-2 h-14 w-full rounded object-cover"
//             src="/imgs/blog/4.png"
//             alt="Placeholder image"
//           />
//           <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
//           <p className="text-xs text-neutral-400">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
//             quidem eos.
//           </p>
//         </a>
//         <a href="#">
//           <img
//             className="mb-2 h-14 w-full rounded object-cover"
//             src="/imgs/blog/5.png"
//             alt="Placeholder image"
//           />
//           <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
//           <p className="text-xs text-neutral-400">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
//             quidem eos.
//           </p>
//         </a>
//       </div>
//       <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
//         <span>View more</span>
//         <FiArrowRight />
//       </button>
//     </div>
//   );
// };

const TABS = [
  {
    id: 1,
    title: "Who We Are",
    Component: () => (
      <div>
        <div className="flex gap-4">
          <div>
            <h3 className="mb-2 text-sm font-medium">About Us</h3>
            <a href="#" className="mb-1 block text-sm text-neutral-400 hover:text-white">
              Our Mission
            </a>
            <a href="#" className="mb-1 block text-sm text-neutral-400 hover:text-white">
              Leadership Team
            </a>
            <a href="#" className="block text-sm text-neutral-400 hover:text-white">
              Board of Directors
            </a>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-medium">Our Work</h3>
            <a href="#" className="mb-1 block text-sm text-neutral-400 hover:text-white">
              Success Stories
            </a>
            <a href="#" className="block text-sm text-neutral-400 hover:text-white">
              Annual Reports
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "What We Do",
    Component: () => (
      <div>
        <div className="flex gap-4">
          <div>
            <h3 className="mb-2 text-sm font-medium">Services</h3>
            <a href="#" className="mb-1 block text-sm text-neutral-400 hover:text-white">
              Trade Facilitation
            </a>
            <a href="#" className="mb-1 block text-sm text-neutral-400 hover:text-white">
              Market Research
            </a>
            <a href="#" className="block text-sm text-neutral-400 hover:text-white">
              Business Development
            </a>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-medium">Programs</h3>
            <a href="#" className="mb-1 block text-sm text-neutral-400 hover:text-white">
              Training & Education
            </a>
            <a href="#" className="block text-sm text-neutral-400 hover:text-white">
              Networking Events
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "How We Help",
    Component: () => (
      <div>
        <div className="flex gap-4">
          <div>
            <h3 className="mb-2 text-sm font-medium">Members</h3>
            <a href="#" className="mb-1 block text-sm text-neutral-400 hover:text-white">
              Member Benefits
            </a>
            <a href="#" className="mb-1 block text-sm text-neutral-400 hover:text-white">
              Success Stories
            </a>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-medium">Resources</h3>
            <a href="#" className="mb-1 block text-sm text-neutral-400 hover:text-white">
              Trade Tools
            </a>
            <a href="#" className="block text-sm text-neutral-400 hover:text-white">
              Market Reports
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Resources",
    Component: () => (
      <div>
        <div className="flex gap-4">
          <div>
            <h3 className="mb-2 text-sm font-medium">Knowledge Center</h3>
            <a href="#" className="mb-1 block text-sm text-neutral-400 hover:text-white">
              Publications
            </a>
            <a href="#" className="mb-1 block text-sm text-neutral-400 hover:text-white">
              Research Papers
            </a>
            <a href="#" className="block text-sm text-neutral-400 hover:text-white">
              Case Studies
            </a>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-medium">Tools</h3>
            <a href="#" className="mb-1 block text-sm text-neutral-400 hover:text-white">
              Trade Statistics
            </a>
            <a href="#" className="block text-sm text-neutral-400 hover:text-white">
              Market Analysis
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "News & Events",
    Component: () => (
      <div>
        <div className="flex gap-4">
          <div>
            <h3 className="mb-2 text-sm font-medium">Latest News</h3>
            <a href="#" className="mb-1 block text-sm text-neutral-400 hover:text-white">
              Press Releases
            </a>
            <a href="#" className="mb-1 block text-sm text-neutral-400 hover:text-white">
              Blog Posts
            </a>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-medium">Events</h3>
            <a href="#" className="mb-1 block text-sm text-neutral-400 hover:text-white">
              Upcoming Events
            </a>
            <a href="#" className="block text-sm text-neutral-400 hover:text-white">
              Past Events
            </a>
          </div>
        </div>
      </div>
    ),
  },
];