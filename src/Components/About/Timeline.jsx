import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// import WorkIcon from "@material-ui/icons/Work";
import { MdOutlineWorkOutline } from "react-icons/md";
// import SchoolIcon from "@material-ui/icons/School";
import { IoSchoolSharp } from "react-icons/io5";
// import StarRateIcon from "@material-ui/icons/StarRate";
import { MdOutlineStarRate } from "react-icons/md";
import { ThemeContext } from "../../Context/Theme";

export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc",
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);
  return (
    <>      
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline 💫</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"February 2024 - Present"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<MdOutlineWorkOutline />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Jr. Software Engineer Intern

            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              <a href="https://sciative.com/" className="link">
                SCIATIVE SOLUTIONS (We Price Right)</a>
            </h4>
            <p data-aos="fade-right">
              Excited to enhance my skills, contribute to the team's success, and continue my commitment to excellence. 
            </p>
              And Looking for the great Opportunities.
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"July 2023 - August 2023"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<MdOutlineWorkOutline />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Web Developer Intern
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              <a href="https://infolabz.in/" className="link">
              INFOLABZ IT SERVICES PVT. LTD.</a>

            </h4>
            <p data-aos="fade-right">
              Created A News Feed App , This News Fetch From The API And In The Form Of Card Showcase In The Website.
              <p>
              By Changing The Category One Can Get The News Feed According To Their Choice.
              </p>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"August 2020 - Present"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<IoSchoolSharp />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Student [BE. (Computer Engineering)]
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              <a href="https://ldce.ac.in/" className="link">
              Lalbhai Dalpatbhai College Of Engineering (LDCE) </a>
            </h4>
            <p data-aos="fade-right">
              Pursuing Computer Engineering and 8.76 CGPA (upto 6th Semester).
            </p>
              Ahmedabad (Gujrat)
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"March 2020"} 
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<IoSchoolSharp />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Student [HSC (Science)]
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              <a href="https://www.instagram.com/b.h.kalsariya_science_academy/" className="link">
              B.H. Kalsariya Science Academy
                </a>
            </h4>
            <p data-aos="fade-right">
              Studied 12th Science and Passed with 85.67 Percentage.
            </p>
               Surat (Gujrat)
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={<MdOutlineStarRate />}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
