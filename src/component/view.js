import React from "react";

export default function view() {
  return (
    <div>
      <iframe
        width="700"
        height="450"
        src="https://www.airpano.com/embed.php?3D=taj-mahal-india"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        scrolling="no"
        framespacing="0"
        allowfullscreen
      ></iframe>
      <div style="float:right">
        Courtesy of{" "}
        <a href="https://www.airpano.com/" target="_blank">
          www.AirPano.com
        </a>
      </div>
    </div>
  );
}
