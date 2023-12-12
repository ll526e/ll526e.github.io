import { createTheme } from '@mui/material';

// A custom theme for this app
export const MuiTheme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        size: 'small'
      }
    }
  }
});