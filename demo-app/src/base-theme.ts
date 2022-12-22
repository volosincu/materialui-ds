//import { DisabledByDefault } from '@mui/icons-material';
import { ButtonGroup, createTheme, getTouchRippleUtilityClass, ToggleButton, touchRippleClasses } from '@mui/material';

export const baseTheme = createTheme({
  palette: {
    //new vars

    // tertiary: {
    //   main: '#697082',
    //   contrastText: '#fff',
    // },

    primary: {
      main: '#0066FF',
      light: '#3299FF',
      dark: '#105AC9',
    },
    secondary: {
      main: '#fafbfb',
    },
    info: {
      main: '#175CD3',
      light: '#E7EEFB',
    },
    success: {
      main: '#027A48',
      light: '#E5F1EC',
    },
    warning: {
      main: '#945605',
      light: '#FEF4E6',
    },
    error: {
      main: '#B42318',
      light: '#F7E9E7',
    },
    // type: 'light',
    background: {
      default: '#ffffff',
    },
    divider: 'rgba(234, 236, 238, 1)',
    text: {
      primary: '#000000',
      secondary: '#3B4056',
    //   tertiary: '#697082',
      disabled: '#C9CED4',
    },
  },
  

  typography: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeightLight: 300,

    h1: {
      fontWeight: 700,
      fontSize: 28,
    },

    // display: {
    //   fontSize: '36px',
    //   fontWeight: 'bold',
    // },

    h2: {
      fontSize: 24,
      fontWeight: 400,
    },
    h3: {
      fontSize: 20,
    },
    h4: {
      fontSize: 18,
    },
    // Disable h5 and h6 variant
    h5: undefined,
    h6: undefined,
    button: {
      fontSize: 16,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
  },

  spacing: 12,
//   spacingNone: 0,
//   spacingXs: 4,
//   spacingS: 8,
//   spacingM: 16,
//   spacingL: 24,
//   spacingXl: 32,
//   spacing2XL: 40,
//   spacing3XL: 48,

  shape: {
    // borderRadiusNone: 0,
    borderRadius: 4,
    // borderRadiusM: 8,
  },

//   shadowS: '0px 1px 4px rgba(0, 0, 0, 0.05)',
//   shadowM: '0px 1px 8px rgba(0, 0, 0, 0.1)',
//   shadowL: '0px 1px 16px rgba(0, 0, 0, 0.2)',

//   props: {
//     MuiTooltip: {
//       arrow: true,
//     },
//   },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: '32px',
          lineHeight: '1.2em',
          borderRadius: '6px',
          textTransform: 'capitalize',
          minWidth: 'fit-content',
          padding: ' 0 8px',

          '&:hover': {
            filter: 'brightness(0.95)',
          },
          
          '&:active': {
            filter: 'brightness(0.9)',
          },

          '&:focus': {
            boxShadow: '0px 0px 0px 2px #3299ff',
          },

          '&.Mui-disabled': {
            backgroundColor: '#fafbfb',
            border: '1px solid #eaecee',
          },
        },

        sizeSmall: {
          height: '24px',
          padding: '0 4px',
        },

        sizeLarge: {
          height: '40px',
          padding: '0 16px',
        },

        contained: {
          '&, &:hover, &:active': {
            boxShadow: 'none',
            border: '1px solid #105AC9',
            backgroundColor: '#0066FF',
          },

        },

        containedError: {
          '&, &:hover, &:active': {
            backgroundColor: '#B42318',
            borderColor: '#B42318'
          }

        },

        outlined: {
          '&, &:hover, &:active': {
            border: '1px solid #c9ced4',
            color: '#000000',
            backgroundColor: '#fafbfb'

          },
        },
        
        text: {
          '&:hover': {
            backgroundColor: '#3299ff',
            filter: 'none',
          },

          '&:hover, &:active, &:focus': {
            color: '#ffffff',
          },

          '&:active': {
            backgroundColor: '#287acc',
            filter: 'none',
          },
          
          '&:focus': {
            backgroundColor: '#3299ff',
            boxShadow: '0px 0px 0px 2px #287acc',
          },
        },
      },
    },

    MuiButtonGroup: {
      styleOverrides: {
        root: {
          backgroundColor: '#FAFBFB',
          padding: '4px',
          boxShadow: 'none',
          borderRadius: '6px',
        },


        grouped: {
          color: '#697082',
          borderRadius: '6px',
          '&, &:hover, &:active, &:focus': {
            backgroundColor: 'transparent',
            border: 'none',
          },

          "&:nth-child(n)": {
            borderRadius: '6px'
          },

          '&:hover': {
            color: '#000000'
          },

          '& .active': {
            boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.05)',
            backgroundColor: '#ffffff',
            border: ' 1px solid #C9CED4',
          },

          '&:focus': {
            color: '#105AC9',

          },
        }
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid #c9ced4',
          boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.05)',
          padding: '16px 24px 16px 16px',
          '&:hover': {
            borderColor: '#98a0ab',
          },
        },
      },
    },


    MuiAvatar: {
      styleOverrides: {
        root: {
          width: '32px',
          height: '32px',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          color: '#000000',
          '&:hover': {
            color: '#0066ff',
          },
          '&.Mui-expanded': {
            minHeight: 'auto',
          },
          '&.Mui-disabled': {
            color: '#c9ced4',
            opacity: '1',
          },
        },
        disabled: {
          '& svg': {
            fill: '#c9ced4',
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          color: '#697082',
          '& p': {
            fontSize: '14px',
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderBottom: '1px solid #eaecee',
          '&:before': {
            backgroundColor: 'none',
          },
          '& , &.Mui-disabled': {
            backgroundColor: 'transparent',
          },
          '&.Mui-expanded': {
            borderTop: '2px solid #0066ff',
            margin: '0px',
          },
        },
        rounded: {
          '&:first-child': {
            borderTopLeftRadius: '0px',
            borderTopRightRadius: '0px',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          borderBottom: '1px solid #eaecee',
          color: '#697082',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#0066FF',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          '&:hover': {
            color: '#000000',
          },
          '&:focus': {
            color: '#105ac9',
          },
        },

        selected: {
          color: '#000000',
        },
        textColorInherit: {
          opacity: '1',
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          borderRadius: '4px',
        },
        colorPrimary: {
          backgroundColor: '#e7eefb;',
          color: '#2c68ee',
        },
        colorSecondary: {
          backgroundColor: '#eaecee',
          color: ' #697082',
        },
        colorError: {
          backgroundColor: '#f7e9e7',
          color: '#b42318',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#c9ced4',
          borderRadius: '4px',
          '&:hover': {
            color: '#98a0ab',
          },
          '&:focus svg': {
            borderRadius: '4px',
            boxShadow: 'inset 0 0 0 2px #3299ff',
          },
          '&:disabled': {
            color: '#fafbfb',
          },
        },
        colorSecondary: {
          '&.Mui-checked': {
            color: '#0066ff',
            '&:hover': {
              color: '#005ce5',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#eaecee',
          color: '#697082',
          '&:hover': {
            filter: 'brightness(0.95)',
          },
          '&:focus': {
            backgroundColor: 'currentColor',
            boxShadow:
              '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
          },
        },
        deleteIcon: {
          color: '#697082',
          '&:hover': {
            color: 'currentColor',
          },
        },
        colorPrimary: {
          backgroundColor: '#e7eefb',
          color: '#2c68ee',
        },
        deleteIconColorPrimary: {
          color: '#2c68ee',
          '&:hover': {
            color: 'currentColor',
          },
        },
        deleteIconOutlinedColorPrimary: {
          color: '#2c68ee',
          '&:hover': {
            color: 'currentColor',
          },
        },
        deletableColorSecondary: {
          '&:focus': {
            backgroundColor: '#eaecee',
          },
        },
        deletableColorPrimary: {
          '&:focus': {
            backgroundColor: '#e7eefb',
          },
        },
        deletable: {
          '&:hover,&:focus': {
            backgroundColor: '#eaecee',
          },
        },
        clickable: {
          '&:hover,&:focus': {
            backgroundColor: '#eaecee',
          },
        },
        clickableColorPrimary: {
          '&:hover, &:focus': {
            backgroundColor: '#e7eefb',
          },
        },
        outlinedSecondary: {
          color: '#000000',
        },
        deleteIconOutlinedColorSecondary: {
          color: '#000000',
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: '#c9ced4',
          '&:hover': {
            color: '#98a0ab',
          },
          '& span:first-of-type': {
            display: 'none',
          },
          '&:hover:before': {
            borderColor: '#98a0ab',
          },
          '&:focus:before': {
            boxShadow: '0 0 0 2px #3299ff',
          },
          '&.Mui-checked:before': {
            backgroundColor: '#0066ff',
            borderColor: '#0066ff',
          },
          '&.Mui-checked:hover:before': {
            filter: 'brightness(0.9)',
          },
          '&.Mui-checked:focus:before': {
            boxShadow: '0 0 0 2px #3299ff',
          },
          '&.Mui-disabled:before': {
            backgroundColor: ' #FAFBFB;',
          },
          '&:before': {
            content: '""',
            backgroundColor: '#ffffff',
            border: '1px solid #c9ced4',
            width: '24px',
            height: '24px',
            borderRadius: '100%',
            position: 'relative',
          },
          '& svg': {
            display: 'none',
          },
        },
        colorSecondary: {
          '&.Mui-checked': {
            color: '#0066ff',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          '&:focus': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: '#697082',
          '&.Mui-error': {
            color: '#b42318',
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#697082',
          fontSize: '14px',
          '&.Mui-error': {
            color: '#000000',
          },
        },
        asterisk: {
          color: '#b42318',
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          border: '1px solid #c9ced4',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px,',
          backgroundColor: 'transparent',
          '&:hover': {
            borderColor: '#98A0AB',
            backgroundColor: 'transparent',
          },
          '&.Mui-focused': {
            backgroundColor: 'transparent',
            boxShadow: '0 0 0 2px #3299ff',
          },
          '&.Mui-disabled': {
            backgroundColor: 'transparent',
            borderColor: '#eaecee',
          },
        },
        underline: {
          '&:before': {
            borderBottom: 'none',
          },
          '&:hover:before': {
            borderBottom: 'none',
          },
          '&:after': {
            borderBottom: 'none',
          },
          '&.Mui-disabled:before': {
            border: 'none',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: '14px',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:hover:not(.Mui-disabled):before': {
            borderBottomColor: '#98a0ab',
            borderWidth: '1px',
          },
          '&:before': {
            borderBottomColor: '#c9ced4',
          },
          '&:after': {
            borderBottom: '1px solid #0066ff',
          },
          '&.Mui-error': {
            '&:after': {
              borderBottomColor: '#b42318',
            },
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#000000',
        },
        arrow: {
          color: '#000000',
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        disabled: {
          backgroundColor: 'transparent',
          borderRadius: 'none',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          padding: '0',
          width: '44px',
          height: '24px',
          borderRadius: '12px',
          '&:hover': {
            backgroundColor: '#eaecee',
          },
          '&:focus': {
            boxShadow: '0px 0px 0px 2px #3299ff',
          },
        },
        switchBase: {
          padding: '0',
          top: '2px',
          left: '2px',
        },
        track: {
          backgroundColor: '#fafbfb',
        },
        thumb: {
          boxShadow: ' 0px 1px 15px rgba(0, 0, 0, 0.15);',
          backgroundColor: '#ffffff',
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow:
            ' 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
          border: ' 1px solid #eaecee',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottomColor: ' #eaecee',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&.Mui-selected, &.Mui-selected:hover': {
            backgroundColor: ' #eaecee',
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
        },
        bar: {
          borderRadius: '100px',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#105AC9',
        },
      },
    },
  
    MuiTablePagination: {
      styleOverrides: {
        root: {
          '& button': {
            height: '32px',
            width: '32px',
            backgroundColor: ' #FAFBFB',
            border: '1px solid #C9CED4',
            borderRadius: '6px',
            '&:hover': {
              filter: 'brightness(0.9)',
              backgroundColor: ' #FAFBFB',
            },
            '&:active': {
              filter: 'brightness(0.85)',
            },
            '&:focus': {
              boxShadow: '0px 0px 0px 2px #3299ff',
            },
          },
          '& .Mui-disabled': {
            backgroundColor: ' #FAFBFB',
            borderColor: '#EAECEE',
            borderRadius: '6px',
          },
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          color: '#697082',
          '&:hover, &:active': {
            color: '#000000',
          },
          '&:focus': {
            color: '#105AC9',
          },
        },
      },
    },
  },
});
