import { Box, rem, Image, Anchor } from '@mantine/core';

export default function Navbar() {
  return (
    <Box
      component="header"
      w={rem(1440)}
      h={rem(214)}
      bg="white"
      style={{
        boxShadow: '0px 0px 14px 0px #C6BFBF40',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Navbar Box */}
      <Box
        w={rem(890)}
        h={rem(80)}
        style={{
          position: 'absolute',
          top: rem(21),
          left: rem(275),
          borderRadius: rem(122),
          background: '#FFFFFF',
          border: '1px solid #FCFCFC',
          boxShadow: '0px 0px 20px 0px #7F7F7F26',
        }}
      >
        {/* Inner Content Container */}
        <Box
          w={rem(838)}
          h={rem(48)}
          style={{
            position: 'absolute',
            top: rem(16),
            left: rem(26),
          }}
        >
          {/* Logo */}
          <Box
            w={rem(44)}
            h={rem(44.6769)}
            style={{
              position: 'absolute',
              top: rem(1.66),
            }}
          >
            <Image
              src="/assets/cmwlogo.png"
              alt="Logo"
              width="100%"
              height="100%"
              fit="contain"
            />
          </Box>
        {/* Nav Items Wrapper */}
<Box
  w={rem(613)}
  h={rem(48)}
  style={{
    position: 'absolute',
    left: rem(68),
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: rem(11.14),
  }}
>
  {/* Home */}
  <Box
    w={rem(102)}
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
      Home
    </Anchor>
  </Box>

  {/* Find Jobs */}
  <Box
    w={rem(130)}
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
      Find Jobs
    </Anchor>
  </Box>

  {/* Find Talents */}
  <Box
    w={rem(146)}
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
      Find Talents
    </Anchor>
  </Box>

  {/* About Us */}
  <Box
    w={rem(123)}
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
      About Us
    </Anchor>
  </Box>

  {/* Testimonials */}
  <Box
    w={rem(148)}
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
      Testimonials
    </Anchor>
  </Box>
</Box>

<Box
  w={rem(123)}
  h={rem(38)}
  style={{
    position: 'absolute',
    left: rem(705),
    top: '50%', 
    transform: 'translateY(-50%)',
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
    Create Jobs
  </Box>
  <Box
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
  </Box>
</Box> {/* navbar over */}

        </Box>
      </Box>
    </Box>
  );
}
