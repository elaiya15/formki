import React from "react";
import { Formik } from "formik";
import {
  Box,
  TextField,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
  Button,
  Radio,
  Typography,
} from "@mui/material";

function FormikComponent() {
  const validateForm = (formData) => {
    var errors = {};
    if (formData.name === "") errors.name = "Name is Required";
    if (formData.age === "") errors.age = "Age is Required";
    if (formData.email === "") errors.email = "Email is Required";
    if (formData.gender === "") errors.gender = "Gender is Required";
    if (formData.courses === "") errors.courses = "Courses is Required";
    return errors;
  };
  const handleSubmit = (formData, { resetForm }) => {
    setTimeout(() => {
      console.log(formData);
      resetForm();
    }, 3000);
  };
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h5" gutterBottom>
        User Formik Form
      </Typography>
      <Formik
        initialValues={{
          name: "",
          age: "",
          email: "",
          gender: "",
          courses: "",
        }}
        validate={(formData) => validateForm(formData)}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "30ch" },
            }}
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              id="name"
              label="Name"
              variant="standard"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <br />
            <span style={{ color: "red" }}>{touched.name && errors.name}</span>
            <br />
            <TextField
              id="age"
              label="Age"
              variant="standard"
              type="number"
              name="age"
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <br />
            <span style={{ color: "red" }}>{touched.age && errors.age}</span>
            <br />
            <TextField
              id="email"
              type="email"
              label="Email"
              variant="standard"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <br />
            <span style={{ color: "red" }}>
              {touched.email && errors.email}
            </span>
            <br /> <br />
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="gender"
              value={values.gender}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="Other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
            <span style={{ color: "red" }}>
              {touched.gender && errors.gender}
            </span>{" "}
            <br /> <br />
            <FormControl fullWidth>
              <InputLabel id="Courses">Courses</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Courses"
                name="courses"
                value={values.courses}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <MenuItem value="React">React</MenuItem>
                <MenuItem value="Node">Node</MenuItem>
                <MenuItem value="Javascript">Javascript</MenuItem>
              </Select>
            </FormControl>
            <br />
            <span style={{ color: "red" }}>
              {touched.courses && errors.courses}
            </span>
            <br /> <br />
            <Button variant="contained" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
            <Button variant="contained" type="button" onClick={handleReset}>
              Reset
            </Button>
          </Box>
        )}
      </Formik>
    </div>
  );
}

export default FormikComponent;
