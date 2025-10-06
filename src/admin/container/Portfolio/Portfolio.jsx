import TextArea from "../../component/CustomComponent/Textarea/Textarea";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, FormControl, FormLabel, Switch } from "@mui/material";
import { object, string, number, mixed, array, boolean, date } from "yup";
import { Form, Formik, useFormik } from "formik";
import Input from "./../../component/CustomComponent/Input/Input";

import CustomeTable from "../../component/customTable/CustomeTable";

import FileInput from "../../component/CustomComponent/FileInput/FileInput";
import {
  useAddPortfolioItemMutation,
  useGetPortfolioListQuery,
} from "../../../redux/api/portfolioApi";

function Portfolio(props) {
  const [open, setOpen] = React.useState(false);
  // const [product, setProduct] = useState([]);
  const [update, setUpdate] = useState();

  const { data, error, isLoading } = useGetPortfolioListQuery();

  console.log("data gett", data);

  const [addPortfolio] = useAddPortfolioItemMutation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // resetForm();
    //  if (resetForm) resetForm();
  };

  const handleedit = (data) => {
    // console.log("data", data);
    handleClickOpen();
    setUpdate(data);
  };

  const portfolioSchema = object({
    name: string().required(),
    technology: string().required(),
    description: string().required(),
    portfolio_image: mixed()
      .required("please upload an image")
      .test("portfolio_image", "images must be jpg or jpeg", (value) => {
        if (typeof value?.url === "string") {
          return true;
        } else {
          let imgtype = value?.type?.toLowerCase();
          return imgtype === "image/png" || imgtype === "image/jpeg";
        }
      })
      .test("portfolio_image", "image size must be less than 2 mb", (value) => {
        if (typeof value?.url === "string") {
          return true;
        } else {
          return value.size <= 2 * 1024 * 1024;
        }
      }),
  });

  const columns = [
    { field: "name", category: "Name", width: 70 },
    { field: "technology", headerName: "Technology", width: 130 },
    { field: "description", headerName: "Description", width: 130 },

    {
      field: "portfolio_image",
      headerName: "portfolio_image",
      width: 130,
      renderCell: (params) => (
        <>
          {console.log("params", params)}
          <img
            width={20}
            height={20}
            src={`/public/img/${params.row?.image}`}
            // src={`${params.row?.portfolio_image?.url}`}
          />
        </>
      ),
    },

    // {
    //   headerName: "action",
    //   width: 130,

    //   renderCell: (params) => (
    //     <>
    //       <IconButton
    //         aria-label="delete"
    //         // onClick={() => deletecoupons(params.row.id)}
    //         onClick={() => deletecoupons(params.row._id)}
    //       >
    //         <DeleteIcon />
    //       </IconButton>
    //       <IconButton aria-label="edit" onClick={() => handleedit(params.row)}>
    //         <ModeEditIcon />
    //       </IconButton>
    //     </>
    //   ),
    // },
  ];

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "50px",
        }}
      >
        <h1>Portfolio</h1>

        <Button variant="outlined" onClick={handleClickOpen}>
          Portfolio
        </Button>
      </Box>

      <CustomeTable rows={data} columns={columns} />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Portfolio</DialogTitle>

        <DialogContent>
          <Formik
            initialValues={
              update
                ? { ...update, resetPssword: update.password }
                : {
                    name: "",
                    technology: "",
                    description: "",
                    portfolio_image: "",
                  }
            }
            onSubmit={(values, { resetForm }) => {
              // console.log("form values", {
              //   ...values,
              //   coupon_image: values.coupon_image.name,
              // });

              let formData = new FormData();

              // console.log("values", values, Object.entries(values));
              console.log(values, "VALUES");

              Object.entries(values).map(([key, val]) => {
                if (key === "portfolio_image") {
                  if (val instanceof File) {
                    formData.append(key, val);
                  }
                } else {
                  formData.append(key, val);
                }
              });

              if (update) {
                let updetedData = {};

                if (typeof values.portfolio_image === "string") {
                  updetedData = { ...values };
                } else {
                  updetedData = {
                    ...values,
                    coupon_image: values.portfolio_image.name,
                  };
                }
                updateApplycoupons({ _id: values._id, body: formData });
              } else {
                addPortfolio(formData);
              }

              // resetForm();
              handleClose(resetForm);
            }}
            validationSchema={portfolioSchema}
          >
            {({ values }) => (
              <Form id="submit-sct">
                <Input label="name" name="name" />

                <TextArea
                  label="technology"
                  name="technology"
                  id="technology"
                />
                <TextArea
                  label="description"
                  name="description"
                  id="description"
                />

                <FileInput name="portfolio_image" label="Upload Image" />

                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>

                  <Button type="submit" form="submit-sct">
                    submit
                  </Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

export default Portfolio;
