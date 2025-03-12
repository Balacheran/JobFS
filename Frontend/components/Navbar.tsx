import { Box, rem, Image, Anchor, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useState } from 'react';

interface NavbarProps {
  onCreateJobClick: () => void;
}

export default function Navbar({ onCreateJobClick }: NavbarProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box
  component="header"
  w="100%"
  bg="white"
  style={{
    boxShadow: '0px 0px 14px 0px #C6BFBF40',
    position: 'relative',
    height: rem(214),
    padding: 0,
  }}
>

      {/* Navbar Box */}
      <Box
        w="100%"
        maw={rem(890)}
        mx="auto"
        h={rem(80)}
        style={{
          position: 'relative',
          top: rem(21),
          borderRadius: rem(122),
          background: '#FFFFFF',
          border: '1px solid #FCFCFC',
          boxShadow: '0px 0px 20px 0px #7F7F7F26',
        }}
      >
        {/* Inner Content Container */}
        <Box
          w="100%"
          maw={rem(838)}
          h={rem(48)}
          mx="auto"
          mt={rem(16)}
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Box
            w={rem(44)}
            h={rem(44.6769)}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Image
              src="/assets/Group.png"
              alt="Logo"
              width="100%"
              height="100%"
              fit="contain"
            />
          </Box>

          {/* Nav Items Wrapper */}
          {!isMobile && (
            <Box
              w={rem(613)}
              h={rem(48)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: rem(11.14),
              }}
            >
              {[
                { label: 'Home', width: rem(102) },
                { label: 'Find Jobs', width: rem(130) },
                { label: 'Find Talents', width: rem(146) },
                { label: 'About Us', width: rem(123) },
                { label: 'Testimonials', width: rem(148) },
              ].map((item, index) => (
                <Box
                  key={index}
                  w={item.width}
                  h={rem(48)}
                  px={rem(5)}
                  style={{
                    borderRadius: rem(12),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Anchor href="#" size="sm" c="gray.8" fw={500}>
                    {item.label}
                  </Anchor>
                </Box>
              ))}
            </Box>
          )}

          {/* Button */}
          {!isMobile && (
            <Box
              w={rem(123)}
              h={rem(38)}
              style={{
                borderRadius: rem(30),
                paddingTop: rem(8),
                paddingBottom: rem(8),
                paddingLeft: rem(24),
                paddingRight: rem(24),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(180deg, #A128FF 0%, #6100AD 113.79%)',
                color: 'white',
                fontWeight: 500,
                fontSize: rem(14),
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                const span1 = e.currentTarget.querySelector('.label-1') as HTMLElement;
                const span2 = e.currentTarget.querySelector('.label-2') as HTMLElement;
                if (span1 && span2) {
                  span1.style.opacity = '0';
                  span2.style.opacity = '1';
                }
              }}
              onMouseLeave={(e) => {
                const span1 = e.currentTarget.querySelector('.label-1') as HTMLElement;
                const span2 = e.currentTarget.querySelector('.label-2') as HTMLElement;
                if (span1 && span2) {
                  span1.style.opacity = '1';
                  span2.style.opacity = '0';
                }
              }}
            >
              <Box
  className="label-1"
  style={{
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 0.3s',
    opacity: 1,
  }}
>
  <button
    onClick={onCreateJobClick}
    style={{
      background: 'transparent',
      border: 'none',
      color: 'inherit',
      fontSize: 'inherit',
      fontWeight: 'inherit',
      cursor: 'pointer',
    }}
  >
    Create Job
  </button>
</Box>

              {/* <Box
                className="label-2"
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'opacity 0.3s',
                  opacity: 0,
                }}
              >
                Login
              </Box> */}
            </Box>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />}
        </Box>
      </Box>
    </Box>
  );
}