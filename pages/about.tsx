import { Heading, Text, Flex, List, ListItem, useColorMode } from '@chakra-ui/react';

import { Layout } from '@components/index';
import TextLink from '@components/TextLink';
import React, { ReactNode, useContext } from 'react';
import { ColorModeContext } from '@contexts/CustomColorContext';
import { NextSeo } from 'next-seo';

const url = 'https://ogzhanolguncu.com/about';
const title = 'About Me – Oğuzhan Olguncu';

// const items = [
//   {
//     title: '1996',
//     cardTitle: 'Beginning',
//     cardSubtitle: 'Journey begins',
//     cardDetailedText: 'Born in Istanbul, the only child of my family.',
//   },
//   {
//     title: '2006 – 2010',
//     cardTitle: 'First Computer',
//     cardSubtitle: 'Baby steps',
//     cardDetailedText: `The family gets our first computer, a PC running Windows. I've used the computer a lot, mostly silly stuff since I had no idea what was going on.`,
//   },
//   {
//     title: '2010 - 2014',
//     cardTitle: 'Exploring the Internet',
//     cardSubtitle: '01010111 01001000 01010101 01010100',
//     cardDetailedText:
//       'I started my technical high school. Studied information technologies, started to learn lots of things about computers and especially about web development because it was the branch I chose to study. Coded websites using HTML tables, good old days. :)',
//   },
//   {
//     title: '2015',
//     cardTitle: 'University',
//     cardSubtitle: 'Endless nights of studying',
//     cardDetailedText: `I went to university for Information Management Systems. Due to my major's nature I studied both management and IT. I've taken core computer science courses such as Data structures, Computer Architecture, Algorithm Analysis and Database Management.`,
//   },
//   {
//     title: '2016',
//     cardTitle: 'University',
//     cardSubtitle: 'Endless nights of work',
//     cardDetailedText: `At the last quarter of 2016, I started work as a full time Fullstack .Net developer and honed my overall skills.`,
//   },
//   {
//     title: '2020 - Present',
//     cardTitle: 'Work',
//     cardSubtitle: 'Different path',
//     cardDetailedText: `I was bored working as a full stack developer. I've chosen a different path and became a Frontend Developer.`,
//   },
// ];

const CustomText = ({ children }: { children: ReactNode }) => {
  const colorModeObj = useContext(ColorModeContext);
  const { colorMode } = useColorMode();

  return (
    <Text
      fontSize="1.05rem"
      mb="1.5rem"
      fontWeight="400"
      color={
        colorMode === 'light' ? colorModeObj.aboutTextColor.light : colorModeObj.aboutTextColor.dark
      }
    >
      {children}
    </Text>
  );
};
const About = () => {
  const colorModeObj = useContext(ColorModeContext);
  const { colorMode } = useColorMode();

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
        }}
      />
      <Layout>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          maxW="100%"
          mx="auto"
          p="0 2rem"
        >
          <Heading
            textAlign="center"
            fontSize={['2rem', '2rem', '3rem', '3rem']}
            color={
              colorMode === 'light' ? colorModeObj.titleColor.light : colorModeObj.titleColor.dark
            }
            margin="5rem auto"
          >
            About me
          </Heading>
          <CustomText>
            Hi! I'm Oğuzhan Olguncu. I currently work full-time as a Frontend Developer, and I build
            {''}
            <TextLink text=" open-source projects " url="#" /> for fun.
          </CustomText>
          <CustomText>
            I taught myself how to make websites first as a hobby and later as a professional
            programmer. I've been documenting everything I learn since I began.
          </CustomText>
          <CustomText>
            I also like to make open source projects, all of which can be found on github and I'm
            also huge classical turkish music lover and recreational powerlifter.
          </CustomText>

          <Heading
            fontSize="1.3rem"
            color={
              colorMode === 'light' ? colorModeObj.titleColor.light : colorModeObj.titleColor.dark
            }
            mb="1rem"
            fontFamily="Inter"
          >
            Get in touch
          </Heading>
          <CustomText>
            I hope you love the site, and if there's anything you want to talk about with me feel
            free to drop me a line by email. I'm happy to hear your comments, feedback, suggestions,
            or just say hi!{' '}
            <em>(Emails regarding ads, sponsored posts, link-sharing, etc. will be ignored.)</em>
          </CustomText>
          <List
            fontSize="1.05rem"
            mb="3rem"
            color={
              colorMode === 'light'
                ? colorModeObj.aboutTextColor.light
                : colorModeObj.aboutTextColor.dark
            }
          >
            <ListItem>
              📧 &nbsp; <strong>Github:</strong> {''}
              <TextLink text="@ogzhanolguncu" url="https://github.com/ogzhanolguncu" />
            </ListItem>
            <ListItem>
              🐙 &nbsp; <strong>Email:</strong> {''}
              <TextLink text="@ogzhanolguncu" url="mailto:ogzhan11@gmail.com" />
            </ListItem>
          </List>
          <Heading
            fontSize="1.6rem"
            textAlign="center"
            fontFamily="Inter"
            color={
              colorMode === 'light' ? colorModeObj.titleColor.light : colorModeObj.titleColor.dark
            }
            mb="1.5rem"
            pb="1rem"
            w="100%"
          >
            Timeline
          </Heading>
          <List
            spacing={3}
            fontSize="1.05rem"
            mb="3rem"
            color={
              colorMode === 'light'
                ? colorModeObj.aboutTextColor.light
                : colorModeObj.aboutTextColor.dark
            }
          >
            <ListItem>
              <strong>1999:</strong> I was born in Istanbul, the last child of my family.
            </ListItem>
            <ListItem>
              <strong>2006 – 2010:</strong> The family gets our first computer, a PC running
              Windows. I use the computer a lot, mostly silly stuff since I had no idea what was
              going on.
            </ListItem>
            <ListItem>
              <strong>2010 - 2014:</strong> I started my technical high school. Studied information
              technologies, started to learn lots of things about computers and especially about web
              development because it was the branch I chose to study. Coded websites using HTML
              tables, good old days :) .
            </ListItem>
            <ListItem>
              <strong>2015:</strong> I go to university for Information Management Systems. Due to
              my major's nature I studied both management and IT. I've taken core computer science
              courses such as Data structures, Computer Architecture, Algorithm Analysis and
              Database Management.
            </ListItem>
            <ListItem>
              <strong>2016:</strong> At the last quarter of 2016, I started work as a full time
              Fullstack .Net developer and honed my overall skills.
            </ListItem>
            <ListItem>
              <strong>2020 – Present:</strong> I was bored working as a full stack developer. I've
              chosen a different path and became a Frontend Developer.
            </ListItem>
          </List>
        </Flex>
      </Layout>
    </>
  );
};

export default About;
