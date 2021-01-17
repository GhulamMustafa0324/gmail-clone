import { Checkbox, IconButton } from "@material-ui/core";
import {
  LabelImportantOutlined,
  Star,
  StarBorderOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "../css/emailRow.css";
import { selectMail } from "../features/mailSlice";

function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [isFilled, setIsFilled] = useState(false);

  const toggleFilledIcon = () => setIsFilled(!isFilled);

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    history.push("/mail");
  };

  return (
    <div className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton onClick={toggleFilledIcon}>
          {isFilled ? <Star /> : <StarBorderOutlined />}
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <div onClick={openMail} className="emailRow__click">
        <div className="emailRow__title">
          <h3>{title}</h3>
        </div>
        <div className="emailRow__message">
          <h4>
            {" "}
            {subject}{" "}
            <span className="emailRow__description"> - {description}</span>
          </h4>
        </div>
        <p className="emailRow__time">{time}</p>
      </div>
    </div>
  );
}

export default EmailRow;
