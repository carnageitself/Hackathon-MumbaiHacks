import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
   
const Category= () =>{
    const data = [
      {
        label: "Engineering",
        value: "html",
        desc: `
        `,
      },
      {
        label: "Management",
        value: "react",
        desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
      },
   
      {
        label: "Commerce",
        value: "vue",
        desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
      },
   
      {
        label: "Arts",
        value: "angular",
        desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
      },
   
      {
        label: "Science",
        value: "svelte",
        desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
      },
   
  ];
   
  return (
    <>
   <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl py-4">Select Your Steam</h1>
  <Tabs value="html" className="px-7 rounded-circle">
          <div class="px-25 grid-cols-5 gap-10  flex-nowrap">
            <div className="bg-gradient-to-r from-cyan-900 to-blue-900  rounded-lg">
                <div className="flex">
                    <img className="rounded-full w-10 h-10 mx-4 " src="https://us.123rf.com/450wm/elenaistomina/elenaistomina2209/elenaistomina220900016/191188240-3d-young-man-avatar-happy-smiling-face-young-student-or-freelancer-realistic-cartoon-character.jpg?ver=6"/>
                    <h2 className="py-2 text-white text-lg font-bold">Engineering</h2>
                </div>
                <div class="divide-y-4 divide-slate-400/25">
                    <div>01</div>
                    <div>02</div>
                    <div>03</div>
                </div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500  rounded-lg">
                <div className="flex">
                    <img className="rounded-full w-10 h-10 mx-4" src="https://us.123rf.com/450wm/elenaistomina/elenaistomina2209/elenaistomina220900016/191188240-3d-young-man-avatar-happy-smiling-face-young-student-or-freelancer-realistic-cartoon-character.jpg?ver=6"/>
                    <h2 className="py-2 text-white text-lg font-bold">Management</h2>
                </div>
                <div class="divide-y-4 divide-slate-400/25">
                    <div>01</div>
                    <div>02</div>
                    <div>03</div>
                </div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500  rounded-lg">
                <div className="flex">
                    <img className="rounded-full w-10 h-10 mx-4" src="https://us.123rf.com/450wm/elenaistomina/elenaistomina2209/elenaistomina220900016/191188240-3d-young-man-avatar-happy-smiling-face-young-student-or-freelancer-realistic-cartoon-character.jpg?ver=6"/>
                    <h2 className="py-2 text-white text-lg font-bold">Science</h2>
                </div>
                <div class="divide-y-4 divide-slate-400/25">
                    <div>01</div>
                    <div>02</div>
                    <div>03</div>
                </div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500  rounded-lg">
                <div className="flex">
                    <img className="rounded-full w-10 h-10 mx-4" src="https://us.123rf.com/450wm/elenaistomina/elenaistomina2209/elenaistomina220900016/191188240-3d-young-man-avatar-happy-smiling-face-young-student-or-freelancer-realistic-cartoon-character.jpg?ver=6"/>
                    <h2 className="py-2 text-white text-lg font-bold">Commerce</h2>
                </div>
                <div class="divide-y-4 divide-slate-400/25">
                    <div>01</div>
                    <div>02</div>
                    <div>03</div>
                </div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500  rounded-lg">
                <div className="flex">
                    <img className="rounded-full w-10 h-10 mx-4" src="https://us.123rf.com/450wm/elenaistomina/elenaistomina2209/elenaistomina220900016/191188240-3d-young-man-avatar-happy-smiling-face-young-student-or-freelancer-realistic-cartoon-character.jpg?ver=6"/>
                    <h2 className="py-2 text-white text-lg font-bold">Arts</h2>
                </div>
                <div class="divide-y-4 divide-slate-400/25">
                    <div>01</div>
                    <div>02</div>
                    <div>03</div>
                </div>
            </div>
          </div>

    {/* <TabsBody
      animate={{
        initial: { y: 200 },
        mount: { y: 0 },
        unmount: { y: 200 },
      }}
    >
      {data.map(({ value, desc }) => (
        <TabPanel key={value} value={value}>
          {desc}
        </TabPanel>
      ))}
    </TabsBody> */}
  </Tabs>
  </>
  ); }

  export default Category;
   