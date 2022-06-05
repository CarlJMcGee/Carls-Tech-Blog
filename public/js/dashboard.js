const submitPost = async (e) => {
  e.preventDefault();

  const title = document.querySelector("#new-post-title").value.trim();
  const content = document.querySelector("#new-post-content").value.trim();
  const userId = document.querySelector("#username").dataset.userId;

  if (title && content) {
    try {
      const newPost = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          content: content,
          user_id: userId,
        }),
        headers: { "Content-Type": "application/json" },
      });

      newPost.ok ? document.location.reload() : window.alert("Failed to Post");
    } catch (err) {
      if (err) throw err;
    }
  }
};

const newPostModal = document.querySelector("#new-post-modal");

const toggleModal = function (modal) {
  return function (e) {
    e.preventDefault;

    if ($(modal).hasClass("is-active")) {
      console.log(`test`);
      $(modal).removeClass("is-active");
      return;
    }

    $(modal).addClass("is-active");
  };
};

// send post to server
$("#new-post-form").submit(submitPost);

// modal actions
$("#new-post-btn").click(toggleModal(newPostModal));
$(".close-modal").click(toggleModal(newPostModal));
