/* eslint-disable no-undef */
const Script = () => {
  return $(".navbar").on("click", 'a[href^="#"]', function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      500
    );
  });
};

export default Script;
