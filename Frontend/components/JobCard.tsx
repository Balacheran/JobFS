import {
  Box,
  Paper,
  Text,
  Button,
  Image,
  Flex,
  rem,
} from '@mantine/core';
import {
  IconUserPlus,
  IconBuilding,
  IconStack,
} from '@tabler/icons-react';

export default function JobCard() {
  return (
    <Paper
      w={316}
      h={360}
      radius={12}
      style={{
        background: '#FFFFFF',
        boxShadow: '0px 0px 14px 0px #D3D3D326',
        position: 'relative',
        padding: 0,
        fontFamily: 'Satoshi Variable',
      }}
    >
      {/* Time Tag */}
      <Box
        w={75}
        h={33}
        style={{
          position: 'absolute',
          top: 16,
          left: 222,
          backgroundColor: '#B0D9FF',
          padding: '7px 10px',
          borderRadius: 10,
        }}
      >
        <Text fz={14} fw={500} c="black">
          24h Ago
        </Text>
      </Box>

      {/* Profile Image Frame */}
      <Box
        w={83.46428680419922}
        h={82}
        style={{
          position: 'absolute',
          top: 16,
          left: 16,
          background: 'linear-gradient(180deg, #FEFEFD 0%, #F1F1F1 100%)',
          border: '1px solid #FFFFFF',
          boxShadow: '0px 0px 10.25px 0px #94949440',
          borderRadius: 13.18,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src="/assets/image 77.png"
          alt="Profile"
          width={65.89}
          height={65.89}
        />
      </Box>

      {/* Job Title */}
      <Text
        fw={700}
        fz={20}
        lh={1}
        mt={117}
        ml={16}
        c="#000000"
        style={{ width: 190, height: 27, textAlign: 'center' }}
      >
        Full Stack Developer
      </Text>

      {/* Job Details */}
      <Flex
        gap={16}
        align="center"
        style={{
          position: 'absolute',
          top: 160,
          left: 16,
          width: 263.0818,
          height: 22,
        }}
      >
        {/* Experience */}
        <Flex gap={4} align="center">
        <Image
            src="/assets/Vector1.png"
            alt="Experience Icon"
            width={17.1}
            height={13.5}
        />
          <Text
            fz={16}
            fw={500}
            style={{ textAlign: 'center', color: '#5A5A5A' }}
          >
            1–3 yr Exp
          </Text>
        </Flex>

        {/* Onsite */}
        <Flex gap={4} align="center">
        <Image
            src="/assets/Vector2.png"
            alt="Experience Icon"
            width={17.1}
            height={13.5}
        />
          <Text
            fz={16}
            fw={500}
            style={{ textAlign: 'center', color: '#5A5A5A' }}
          >
            Onsite
          </Text>
        </Flex>

        {/* Salary */}
        <Flex gap={4} align="center">
        <Image
            src="/assets/Vector3.png"
            alt="Experience Icon"
            width={17.1}
            height={13.5}
        />
          <Text
            fz={16}
            fw={500}
            style={{ textAlign: 'center', color: '#5A5A5A' }}
          >
            12LPA
          </Text>
        </Flex>
      </Flex>

      {/* Description */}
      <Text
  component="ul" // render as <ul>
  fz={14}
  fw={500}
  lh={1}
  style={{
    position: 'absolute',
    top: 202,
    left: 9,
    width: 300,
    height: 76,
    color: '#555555',
    fontFamily: 'Satoshi Variable',
    paddingLeft: 18, // space for bullets
    margin: 0,
  }}
>
  <li style={{ marginBottom: 4 }}>
    A user-friendly interface lets you browse stunning photos and videos.
  </li>
  <li>
    Filter destinations based on interests and travel style, and create personalized
  </li>
</Text>


      {/* Apply Button */}
      <Button
        fullWidth
        h={46}
        radius={10}
        style={{
          position: 'absolute',
          left: 'calc(50% - 284px/2)',
          top: 298,
          maxWidth: 284,
          backgroundColor: '#00AAFF',
          boxShadow: '0px 0px 14px rgba(93, 93, 93, 0.15)',
          fontWeight: 600,
          fontSize: 16,
        }}
      >
        Apply Now
      </Button>
    </Paper>
  );
}