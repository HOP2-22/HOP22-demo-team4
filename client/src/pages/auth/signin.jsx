
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  OutlinedInput,
  FormControl,
  Stack,
} from "@mui/material";
import { useContext, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";

import { useRouter } from "next/router";
import { AuthContext } from "@/provider/AuthContext";

export default function signin() {
  const { setUser } = useContext(AuthContext);

  const LoginFunc = async () => {
    try {
      const res = await axios.post(`http://localhost:8080/user/login`, {
        email: user.email,
        password: user.password,
      });
      if (res.status === 200) {
        Cookies.set("token", res.data.token);
        setUsername(res.data.email);
        navigate(`/`);
      }
    } catch (error) {
      console.log(error);
      alert("Password or Email is invalid");
    }
  };
  const image =
    "https://res.cloudinary.com/dymjjmeyc/image/upload/v1679913069/AccountTrader/0x0_zfidbn.jpg";
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const router = useRouter();
  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "550px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              padding: "60px 35px 35px 35px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: "38px",
                fontWeight: 400,
                lineHeight: "1.2",
                fontFamily: "inherit",
                color: "#55555",
                textAlign: "center",
                paddingBottom: "50px",
              }}
            >
              Sign In With
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "#3C5997",
                  borderRadius: "10px",
                  width: "49%",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)",
                }}
              >
                <Button
                  sx={{
                    display: "flex",
                    gap: "10px",
                    width: "100%",
                    height: "55px",
                    textTransform: "none",
                    borderRadius: "20px",
                    fontSize: "18px",
                    backgroundColor: "#3C5997",
                    color: "#FFFFFF",
                    border: "1px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                  Facebook
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)",
                  borderRadius: "10px",
                  width: "49%",
                }}
              >
                <Button
                  sx={{
                    display: "flex",
                    gap: "10px",
                    width: "100%",
                    height: "55px",
                    textTransform: "none",
                    borderRadius: "20px",
                    fontSize: "18px",
                    backgroundColor: "#fff",
                    color: "#877C7C",
                    border: "1px",
                  }}
                >
                  <svg
                    style={{ width: "30px" }}
                    viewBox="0 0 366 372"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z"
                      id="Shape"
                      fill="#EA4335"
                    />
                    <path
                      d="M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z"
                      id="Shape"
                      fill="#FBBC05"
                    />
                    <path
                      d="M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z"
                      id="Shape"
                      fill="#4285F4"
                    />
                    <path
                      d="M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z"
                      fill="#34A853"
                    />
                  </svg>
                  Google
                </Button>
              </Box>
            </Stack>
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  paddingBottom: "9px",
                  paddingTop: "30px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "inherit",
                    fontSize: "16px",
                    color: "#555",
                    lineHeight: "1.5",
                    fontWeight: 600,
                  }}
                >
                  Email
                </Typography>
              </Box>
              <TextField
                id="outlined-basic"
                variant="outlined"
                sx={{
                  width: "100%",
                  fontSize: "18px",
                  lineHeight: "1.2",
                  height: "60px",
                  backgroundColor: "#F7F7F7",
                }}
              />
              <Box
                sx={{
                  paddingBottom: "9px",
                  paddingTop: "13px",
                  display: "flex",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "inherit",
                    fontSize: "16px",
                    color: "#555",
                    lineHeight: "1.5",
                    fontWeight: 600,
                  }}
                >
                  Password
                </Typography>
                <Typography
                  sx={{
                    borderBottom: "1px solid #99999",
                    textDecoration: "underline",
                    fontSize: "14px",
                    lineHeight: "1.5",
                    marginLeft: "8px",
                    marginTop: "3px",
                    fontWeight: 400,
                  }}
                  onClick={() => {
                    router.push("/auth/forgot");
                  }}
                >
                  Forgot?
                </Typography>
              </Box>
              <FormControl
                sx={{ width: "100%", backgroundColor: "#F7F7F7" }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <Box
                style={{
                  backgroundColor: "#333333",
                  borderRadius: "10px",
                  width: "100%",
                  height: "60px",
                  marginTop: "10px",
                  fontFamily: "inherit",
                  fontSize: "16px",
                  color: "#ffffff",
                  fontWeight: 600,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography>Sign in</Typography>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  width: "100%",
                  textAlign: "center",
                  paddingTop: "55px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "inherit",
                    fontSize: "14px",
                    color: "#999",
                    fontWeight: 400,
                  }}
                >
                  Not a member?
                </Typography>
                <Typography
                  sx={{
                    borderBottom: "1px solid #99999",
                    textDecoration: "underline",
                    fontFamily: "inherit",
                    fontSize: "14px",
                    lineHeight: "1.5",
                    marginLeft: "8px",
                    fontWeight: 400,
                    color: "#999",
                  }}
                  onClick={() => {
                    router.push("/auth/signup");
                  }}
                >
                  Sign up now
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

