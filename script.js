document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks! Your message has been sent.");
      form.reset();
    });
  }

  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalImage = document.getElementById("modal-image");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
      modalTitle.textContent = card.dataset.title;
      modalDescription.textContent = card.dataset.description;
      modalImage.src = card.dataset.image;
      modal.classList.remove("hidden");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      modal.classList.add("hidden");
    }
  });
});
const modal = document.getElementById("project-modal");
const mediaContainer = document.getElementById("modal-media-container");

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const title = card.dataset.title;
    const description = card.dataset.description;
    const videoSrc = card.dataset.video;
    const type = card.dataset.type;

    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-description").textContent = description;

    mediaContainer.innerHTML = "";

    if (type === "local") {
      const video = document.createElement("video");
      video.src = videoSrc;
      video.controls = true;
      video.autoplay = true;
      video.muted = false;
      video.style.maxWidth = "100%";
      mediaContainer.appendChild(video);
    } else if (type === "youtube") {
      const iframe = document.createElement("iframe");
      iframe.src = videoSrc;
      iframe.width = "100%";
      iframe.height = "300";
      iframe.frameBorder = "0";
      iframe.allow = "autoplay; encrypted-media";
      iframe.allowFullscreen = true;
      mediaContainer.appendChild(iframe);
    }

    modal.classList.remove("hidden");
  });
});

document.querySelector(".close").addEventListener("click", () => {
  modal.classList.add("hidden");
  mediaContainer.innerHTML = "";
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    mediaContainer.innerHTML = "";
  }
});
