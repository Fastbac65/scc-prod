// @mui
import { alpha, styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const MARGIN = {
  marginTop: 0,
  marginBottom: 4,
};

const pMargin = {
  marginTop: 0,
  marginBottom: 0,
};

const StyledMarkdown = styled('div', {
  shouldForwardProp: (prop) => prop !== 'firstLetter',
})(({ firstLetter, theme }) => ({
  // Heading
  '& h1': { ...MARGIN, ...theme.typography.h1 },
  '& h2': { ...MARGIN, ...theme.typography.h2 },
  '& h3': { ...MARGIN, ...theme.typography.h3 },
  '& h4': { ...MARGIN, ...theme.typography.h4 },
  '& h5': { ...MARGIN, ...theme.typography.h5 },
  '& h6': { ...MARGIN, ...theme.typography.h6 },
  '& p': { ...pMargin, ...theme.typography.body2, color: theme.palette.text.secondary },

  // Link
  a: {
    color: theme.palette.mode === 'light' ? theme.palette.primary.light : theme.palette.primary.lighter,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },

  // Hr
  hr: {
    borderColor: theme.palette.divider,
  },

  // List
  '& ul, & ol': {
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    marginTop: 8,
    marginBottom: 8,
    paddingLeft: theme.spacing(4),
    '& li': {
      lineHeight: 1.5,
    },
  },

  // Blockquote
  '& blockquote': {
    lineHeight: 1.5,
    fontSize: '1.5em',
    margin: '40px auto',
    position: 'relative',
    fontFamily: 'Georgia, serif',
    fontStyle: 'italic',
    textAlign: 'center',
    padding: theme.spacing(3, 5, 3, 5),
    borderRadius: Number(theme.shape.borderRadius) * 2,
    backgroundColor: theme.palette.background.neutral,
    color: `${theme.palette.text.secondary} !important`,
    [theme.breakpoints.up('md')]: {
      width: '70%',
    },
    '& p, & span': {
      marginBottom: '0 !important',
      fontSize: 'inherit !important',
      fontFamily: 'Georgia, serif !important',
      color: `${theme.palette.text.secondary} !important`,
    },
    '&:before': {
      left: 16,
      top: -4,
      display: 'block',
      fontSize: '2.5em',
      content: '"\\201C"',
      position: 'absolute',
      color: theme.palette.text.disabled,
    },
    '&:after': {
      right: 16,
      top: -4,
      display: 'block',
      fontSize: '2.5em',
      content: '"\\201D"',
      position: 'absolute',
      color: theme.palette.text.disabled,
    },
  },

  // Image
  '& img': {
    margin: theme.spacing(5, 0),
    borderRadius: theme.spacing(1),
  },

  // Table
  table: {
    // width: '100%',

    borderCollapse: 'collapse',
    border: `1px solid ${theme.palette.divider}`,
    'th, td': {
      padding: theme.spacing(0.5),
      border: `1px solid ${theme.palette.divider}`,
      fontSize: '14px',
    },

    'tbody tr:nth-of-type(odd)': {
      backgroundColor: alpha(theme.palette.background.neutral, 0.8),
    },
    'tbody tr:nth-of-type(even)': {
      backgroundColor: alpha(theme.palette.background.default, 0.8),
    },
  },

  // Checkbox
  input: {
    '&[type=checkbox]': {
      position: 'relative',
      cursor: 'pointer',
      '&:before': {
        content: '""',
        top: -2,
        left: -2,
        width: 17,
        height: 17,
        borderRadius: 3,
        position: 'absolute',
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 700],
      },
      '&:checked': {
        '&:before': {
          backgroundColor: theme.palette.primary.main,
        },
        '&:after': {
          content: '""',
          top: 1,
          left: 5,
          width: 4,
          height: 9,
          position: 'absolute',
          transform: 'rotate(45deg)',
          msTransform: 'rotate(45deg)',
          WebkitTransform: 'rotate(45deg)',
          border: `solid ${theme.palette.common.white}`,
          borderWidth: '0 2px 2px 0',
        },
      },
    },
  },

  // First Letter
  ...(firstLetter && {
    '& > p:first-of-type': {
      '&:first-letter': {
        float: 'left',
        fontSize: 80,
        lineHeight: 1,
        paddingRight: theme.spacing(1.4),
        fontWeight: theme.typography.fontWeightBold,
      },
    },
  }),
}));

export default StyledMarkdown;
