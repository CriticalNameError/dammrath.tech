import React, { useEffect, useState } from "react";
import path from 'path'
import ReactPDF, {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image,
  Font,
  Link
} from "@react-pdf/renderer";

import {
  SectionHeader,
  Headline,
  Head,
  ExperienceItem,
  Box,
  colors,
  TimelineItem,
  Paragraph,
  EducationItem,
  periodToString,
  Tag
} from "./elements";
import resume from "./resume.json";
// import resolveConfig from "tailwindcss/resolveConfig";

// import localConfig from "../../tailwind.config";

// const { theme } = resolveConfig(localConfig);

Font.register({
	family: 'DefaultFont',
	fonts: [
		{ src: path.join(__dirname, '../../public/fonts/Montserrat-Regular.ttf')},
		{
      src: path.join(__dirname, '../../public/fonts/Montserrat-SemiBold.ttf'),
			fontWeight: 700
		},
		{
			src: path.join(__dirname, '../../public/fonts/Montserrat-Italic.ttf'),
			fontStyle: 'italic'
		}
	]
})

function durationForWork(work) {
  const start = work.startDate && new Date(work.startDate);
  const end = (work.endDate && new Date(work.endDate)) || new Date();

  const diff = (end.getTime() - start.getTime()) / 1000 / 60 / 60 / 24 / 365;
  return Math.floor(diff);
}

function durationForSkill(work, skill) {
  let sum = 0;
  for (const w of work) {
    const dur = durationForWork(w);
    if (w.skills && w.skills.indexOf(skill) !== -1) {
      sum += dur;
    }
  }
  return sum;
}

// module.exports = {
//   durationForSkill,
//   durationForWork
// };




const sortedCategories = resume.skills.map(c => {
  const nk = c.keywords
    .map(k => {
      return {
        name: k,
        // score is currently just duration
        score: (resume.work && durationForSkill(resume.work, k)) || 0
      };
    })
    .sort((a, b) => {
      return b.score - a.score;
    });
  return {
    ...c,
    keywords: nk
  };
});

// import { Andri } from "./pictures";


export const CVFrontpage = () => (
  <Document>
  <Page size="A4" style={styles.page} wrap={false}>
    <View style={styles.top}>
   
                        <Image style={styles.logo}  src={path.join(__dirname, '../../public/images/logo_square_grey.png')} alt="images" />
                    
      <View
        style={{
          marginLeft: 50
          //alignItems: "center"
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "semibold", textAlign: "left" }}>
          {resume.basics.name}
        </Text>
        <Text style={{ fontSize: 12, textAlign: "left" }}>Fullstack Developer | IT Architect | Consultant</Text>
        <View style={{ flexDirection: "row", justifyContent: "flex-start", paddingTop: 4, color: "#c06d00", fontSize: 7, fontWeight: "bold"}}>
        <Text>{resume.basics.phone} | </Text>
        <Text>{resume.basics.email}</Text>
      </View>
      </View>
      <Head src={path.join(__dirname, '../../public/images/profilepic.jpg')}/>
    </View>
    <View
      style={{
        // marginTop: 5,
        paddingVertical: 3,
        width: "90%",
        marginLeft: "5%",
        marginTop: -9,
        // borderTop: 0.5,
        // borderBottom: 0.5,
        // borderColor: "#d3d3d3",
        backgroundColor: "#444"
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 10,
          textAlign: "center",
          color: "white"
        }}
      >
        {resume.basics.summary}
      </Text>
    </View>

    <View
      style={{
        flexDirection: "row"
      }}
    >
      <View style={styles.left}>
        <Box title="Education">
          {resume.education.map(e => (
            <EducationItem
              key={`${e.institution + e.startDate}`}
              institution={e.institution}
              area={e.area}
              period={periodToString(e.startDate, e.endDate)}
              studyType={e.studyType}
            />
          ))}
        </Box>

        <Box title="Skills">
          <Text style={{ color: "#313131", fontSize: 6.5, marginTop: -8, fontStyle: "italic", textAlign: "center" }}>
            -ordered by experience-
          </Text>
          {sortedCategories.map(s => (
            <View key={s.name} wrap={true} style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: "bold", color: s.color }} key={s.name}>
                {s.name}
              </Text>
              <View
                style={{ flexWrap: "wrap", flexDirection: "row", marginTop: 5 }}
              >
                {s.keywords &&
                  s.keywords.map(kw => (
                    <Tag
                      key={kw.name}
                      color={s.color}
                      //badgeText={kw.score > 0 && `${kw.score}y`}
                    >
                      {kw.name}
                    </Tag>
                  ))}
              </View>
            </View>
          ))}
        </Box>

        <Box title="About">
          <Paragraph>
            I come from Reykjavík, Iceland and am the oldest of 5 brothers. In
            2006 I moved to Denmark to study. I now live near Aalborg, Denmark
            with my girlfriend and son. In my off-time I like to cook, take
            photos and go for walks.
          </Paragraph>
          <Paragraph>
            I've been facinated by computers since age 8 and spend much of my
            free time, learning more about them.
          </Paragraph>
        </Box>

        <Box title="Languages">
          <Text>Icelandic (native)</Text>
          <Text>English (fluent)</Text>
          <Text>Danish (fluent)</Text>
        </Box>

        <Box title="Social">
          <Text>Co-organizer & Speaker Aalborg React Meetup</Text>
          <Text>Co-organizer & Speaker Aalborg Hackathon</Text>
        </Box>

        <Box title="Contact">
          <Link src="mailto:martin.dammrath@gmail.com">
            <Text>martin.dammrath@gmail.com</Text>
          </Link>
        </Box>
      </View>
      <View wrap={true} style={styles.right}>
        <View>
        <Text style={{textTransform: "uppercase", textAlign: "center", paddingBottom: 3, borderBottom: 1.5, borderColor: "#90b159", fontSize: 12, fontWeight: "bold"}}>Experience</Text>
          {resume.work.slice(0, 100).map((w, idx) => (
            <TimelineItem
              idx={idx}
              key={`${w.company + w.startDate}`}
              title={w.position}
              employer={w.company}
              period={periodToString(w.startDate, w.endDate)}
              tags={w.skills}
              skills={resume.skills}
            >
              {w.summary}
            </TimelineItem>
          ))}
          <View style={styles.view}>
                        <Image style={styles.image}  src={path.join(__dirname, '../../public/images/polygon.png')} alt="images" />
                    </View>
        </View>
      </View>
    </View>
    <View fixed style={styles.footer}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", color: "#3e5f09" }}>
        <Text>{resume.basics.name}</Text>
        <Text>{resume.basics.phone}</Text>
        <Text>{resume.basics.email}</Text>
        <Text
          fixed
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </View>
    </View>
  </Page>
  </Document>
);

// Create Document Component
export const CVDoc = () => (
  <Document>
    <CVFrontpage />
  </Document>
);

// Create styles
const styles = StyleSheet.create({
  page: {
    //paddingVertical: 30,
    position: "relative",
    // paddingTop: 20,
    paddingBottom: 40,
    //marginHorizontal: 30,
    fontSize: 8,
    backgroundColor: "#ddeabf",
    color: "#313131", //theme.colors.gray[900],
    fontFamily: "DefaultFont"
  },
  leftHeader: {
    alignItems: "center",
    paddingBottom: 20
  },
  top: {
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: "#ff9100",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    margin: 0,
    paddingHorizontal: 30,
  },
  left: {
    width: "50%",
    marginTop: 20,
    paddingRight: 10,
    paddingLeft: 30,
    //flex: 1,
  },
  right: {
    marginTop: 20,
    paddingLeft: 10,
    width: "50%",
    paddingRight: 30,
    //flex: 1
  },
  footer: {
    marginHorizontal: 10,
    borderTopColor: "#d3d3d3",
    borderTopWidth: 0.5,
    paddingVertical: 5,
    width: "100%",
    position: "absolute",
    bottom: 10,
    left: 20
  },
  view: {
    width: '100%',
    padding: 0,
},
image: {
    objectFit: 'cover',
},
logo: {
  position: "absolute",
  top: 4,
  left: 5,
  width: 30,
  height: 30
}
});
