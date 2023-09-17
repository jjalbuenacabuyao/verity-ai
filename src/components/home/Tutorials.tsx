"use client";

import { Tab, Tabs } from "@nextui-org/tabs";
import { MdVideoLibrary } from "react-icons/md";
import { BsFillFileRichtextFill } from "react-icons/bs";
import React, { useState } from "react";
import Subheading from "./Subheading";
import InstructionList from "./InstructionList";
import TutorialsHeading from "./TutorialsHeading";

const instructions = [
  {
    instruction: (
      <p>
        1. In the VerityAI homepage, click the{" "}
        <span className="font-semibold">Log in</span> button.
      </p>
    ),
    imgSource: "/login.png",
    altText:
      "Screenshot of VerityAI homepage with arrow pointing to the Login button",
  },
  {
    instruction: (
      <p>
        2. Enter your <span className="font-semibold">email</span> and{" "}
        <span className="font-semibold">password</span> and click Log in. After
        logging in, you will be automatically redirected to the detector page.
      </p>
    ),
    imgSource: "/emailandpassword.png",
    altText: "Screenshot of Login Modal",
  },
  {
    instruction: (
      <p>
        3. To upload files, click the{" "}
        <span className="font-semibold">Browse Files</span> button.
      </p>
    ),
    imgSource: "/browsefiles.png",
    altText: "Screenshot of Login Modal",
  },
  {
    instruction: (
      <p>
        4. Select the files that you want to check and click the{" "}
        <span>Open</span> button. It is important to remember that you can only
        upload 20 files each time.
      </p>
    ),
    imgSource: "/uploadfiles.png",
    altText: "Screenshot of Login Modal",
  },
  {
    instruction: (
      <p>
        5. Now you can view the detection results. Additionally, you can also
        download the detection report by clicking{" "}
        <span className="font-semibold">Download Report</span> button.
      </p>
    ),
    imgSource: "/downloadreport.png",
    altText: "Screenshot of Login Modal",
  },
  {
    instruction: (
      <p>
        6. To change password, click the user avatar on the upper right side and
        choose <span className="font-semibold">Change Password</span>. Next,
        enter the current password and the new password. Then click{" "}
        <span className="font-semibold">Submit</span> to change the password.
      </p>
    ),
    imgSource: "/changepassword.png",
    altText: "Screenshot of Login Modal",
  },
  {
    instruction: (
      <p>
        7. To log out, click the avatar and choose log out. After logging out,
        you will be redirected to the the homepage.
      </p>
    ),
    imgSource: "/logout.png",
    altText: "Screenshot of Login Modal",
  },
];

const adminInstructions = [
  {
    instruction: (
      <p>
        1. Administrators have some additional functionalities for managing the
        users. If you are an administrator, you can access the dashboard by
        clicking the <span className="font-semibold">dashboard</span> link in
        the navigation bar.
      </p>
    ),
    imgSource: "/dashboardlink.png",
    altText:
      "Screenshot of VerityAI homepage with arrow pointing to the Login button",
  },
  {
    instruction: (
      <p>
        2. You can add a user by clicking the{" "}
        <span className="font-semibold">Add User</span> button on the left.
      </p>
    ),
    imgSource: "/adduser.png",
    altText:
      "Screenshot of VerityAI homepage with arrow pointing to the Login button",
  },
  {
    instruction: (
      <p>
        3. Enter the necessary details and click{" "}
        <span className="font-semibold">Create User</span>.
      </p>
    ),
    imgSource: "/adduserdetails.png",
    altText:
      "Screenshot of VerityAI homepage with arrow pointing to the Login button",
  },
  {
    instruction: (
      <p>
        4. You can delete a user by clicking the trash icon and clicking delete
        to confirm.
      </p>
    ),
    imgSource: "/deleteusericon.png",
    altText:
      "Screenshot of VerityAI homepage with arrow pointing to the Login button",
  },
  {
    instruction: (
      <p>
        5. Additionally, you can edit user&apos;s role by clicking the pen icon.
        Click save to confirm user&apos;s permission.
      </p>
    ),
    imgSource: "/edituser.png",
    altText:
      "Screenshot of VerityAI homepage with arrow pointing to the Login button",
  },
  {
    instruction: (
      <p>
        6. To search for a user, enter the name of the user in the searchbar and
        it will automatically search for the user.
      </p>
    ),
    imgSource: "/search.png",
    altText:
      "Screenshot of VerityAI homepage with arrow pointing to the Login button",
  },
];

const Tutorials = () => {
  const [selected, setSelected] = useState("Video");
  return (
    <div id="tutorial" className="pt-[4.5rem]">
      <Subheading title="Tutorial" />
      <div className="flex flex-col justify-center">
        <Tabs
          aria-label="Tutorial options"
          color="primary"
          variant="solid"
          radius="full"
          classNames={{
            base: "flex justify-center",
            tab: "h-12 px-5",
            tabList: "gap-5",
          }}
          selectedKey={selected}
          //@ts-ignore
          onSelectionChange={setSelected}
          disableAnimation
        >
          <Tab
            key="Video"
            title={
              <div className="flex items-center gap-2">
                <MdVideoLibrary size={24} />
                <span className="font-semibold">Video</span>
              </div>
            }
          >
            <div className="mx-auto max-w-2xl overflow-hidden rounded-xl">
              <iframe
                allowFullScreen
                src="https://www.youtube.com/embed/j2snrPFEfIw"
                className="min-h-[280px] w-full supports-aspect-ratio:aspect-video"
              ></iframe>
            </div>
          </Tab>
          <Tab
            key="Text"
            title={
              <div className="flex items-center gap-2">
                <BsFillFileRichtextFill size={24} />
                <span className="font-semibold">Text</span>
              </div>
            }
          >
            <div className="mx-auto max-w-2xl lg:text-lg">
              <TutorialsHeading title="VerityAI Step-by-Step Instructions" />
              <InstructionList data={instructions} />
              <TutorialsHeading title="For Administrators" secondary />
              <InstructionList data={adminInstructions} />
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Tutorials;
