import React, { useRef, useState, useEffect } from "react";

const LocationForm = (props) => {
  const {
    weatherCardLocation,
    setWeatherCardLocation,
    error,
    setError,
  } = props;
  // const { error, setError } = props;
  const locationInputRef = useRef();
  const [inputLocation, setInputLocation] = useState("");
  const [suggestions, setSuggestions] = useState(null);
  const [activeSuggestion, setActiveSuggestion] = useState(0);

  useEffect(() => {
    if (inputLocation) {
      // set input element cursor position to the end
      locationInputRef.current.selectionStart =
        locationInputRef.current.value.length;
      locationInputRef.current.selectionEnd =
        locationInputRef.current.value.length;
    }
  });

  useEffect(() => {
    // ensure that if the input text is deleted, the active suggestion is reset to 0
    if (!suggestions) setActiveSuggestion(0);
  }, [suggestions]);

  const handleSubmit = (event) => {
    event.preventDefault();
    clearFormAndChangeLocation(inputLocation);
  };

  const clearFormAndChangeLocation = (location) => {
    setInputLocation("");
    setWeatherCardLocation(location);
    if (error) setError(null);
  };

  const handleChange = (event) => {
    const entered = event.target.value;

    const locations = [
      "Aberdeen",
      "Birmingham",
      "Bristol",
      "Cardiff",
      "Edinburgh",
      "Glasgow",
      "Leeds",
      "Leicester",
      "Liverpool",
      "London",
      "Manchester",
      "Nottingham",
      "Sheffield",
      "Southampton",
    ];
    const possibleOptions = locations.filter((location) =>
      location.toLowerCase().includes(entered.toLowerCase())
    );
    possibleOptions.unshift(entered); // add whatever the user has typed as the first option
    if (entered.length === 0) setSuggestions(null);
    else setSuggestions(possibleOptions);
    setInputLocation(entered);
  };

  const onSuggestionClick = (event) => {
    const selectedLocation = event.currentTarget.innerHTML;

    setInputLocation(selectedLocation);
    clearFormAndChangeLocation(selectedLocation);
    setSuggestions(null);
  };

  const handleKeyPress = (event) => {
    if (suggestions === null) return;
    const { key: keyPressed } = event;

    if (keyPressed === "ArrowUp") {
      // decrement
      setActiveSuggestion((currentActiveSuggestion) => {
        return currentActiveSuggestion > 0 ? currentActiveSuggestion - 1 : 0;
      });
      setInputLocation(suggestions[activeSuggestion - 1]);
    }
    if (keyPressed === "ArrowDown") {
      // increment
      setActiveSuggestion((currentActiveSuggestion) =>
        currentActiveSuggestion < suggestions.length - 1
          ? currentActiveSuggestion + 1
          : suggestions.length - 1
      );
      setInputLocation(suggestions[activeSuggestion + 1]);
    }
    if (keyPressed === "Enter") {
      if (suggestions.length > 0)
        setInputLocation(suggestions[activeSuggestion]);
      setActiveSuggestion(0);
      setSuggestions(null);
    }
  };

  const onMouseHover = (event) => {
    const optionHoveredOver = event.currentTarget.innerHTML;
    const indexOfOptionHoveredOver = suggestions.indexOf(optionHoveredOver);
    setActiveSuggestion(indexOfOptionHoveredOver);
    setInputLocation(optionHoveredOver);
  };

  return (
    <div className="form-and-suggestions-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="location"
          name="location"
          ref={locationInputRef}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          value={inputLocation}
          placeholder={"Search for a location"}
        ></input>
        <button type="submit">Find</button>
        {suggestions && (
          <ul className="suggestions">
            {suggestions.map((option, index) => (
              <li
                key={option}
                onClick={onSuggestionClick}
                onMouseEnter={onMouseHover}
                className={
                  index === activeSuggestion ? "active-suggestion" : undefined
                }
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
};

export default LocationForm;
