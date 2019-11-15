import React, { useState } from "react";

//parse in props
export default function SearchForm(props) {
  const { onChange, value } = props;
  //create search form
  return (
    <section className="search-form">
      <input
        type="text"
        name="textfield"
        placeholder="Search.."
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </section>
    // Add a search form here
  );
}
