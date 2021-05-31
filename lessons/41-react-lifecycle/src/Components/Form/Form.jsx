import React, { useState } from "react";
import useFetch from "../CustomHooks/useFetch";
import EmojiContainer from "../EmojiContainer/EmojiCOntainer";

const URL =
  "https://raw.githubusercontent.com/asimonok/42-js-pro-course/lesson/41-react-lifecycle/lessons/41-react-lifecycle/emojiList.json";

const Form = () => {
  const [searchText, setSearchText] = useState("");
  const [foundEmojis, setFoundEmojis] = useState([]);
  const count = 15;
  const { data } = useFetch(URL);

  const filterEmoji = (value) => {
    if (value.length === 0) {
      setFoundEmojis([]);
    } else {
      const filterData = data.filter(({ title, keywords }) => {
        if (
          title.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
          keywords.split(" ").includes(value.toLowerCase())
        ) {
          return true;
        }
        return false;
      });
      setFoundEmojis(filterData);
    }
  };

  const onChangeInput = (e) => {
    const value = e.target.value.trim();
    setSearchText(value);
    filterEmoji(value);
  };

  const emojiList = count > 0 ? foundEmojis.slice(0, count) : foundEmojis;
  return (
    <div>
      <h1>Emoji Search</h1>
      <div>
        <div>
          <input
            type="text"
            placeholder="Enter title of symbol"
            onChange={onChangeInput}
          />
        </div>
        <EmojiContainer emojiList={emojiList} />
      </div>
    </div>
  );
};

export default Form;
