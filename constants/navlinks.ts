import { useTranslations } from "next-intl";

export const useNavLinks = () => {
  const t = useTranslations("nav");

  return [
    {
      href: "#",
      label: t("video"),
      dropdownItems: [
        {
          title: t("categories"),
          items: [
            { label: t("intros"), href: "#" },
            { label: t("animations"), href: "#" },
            { label: t("musicVisualizations"), href: "#" },
            { label: t("videoEditing"), href: "#" },
            { label: t("youtubeVideos"), href: "#" },
            { label: t("slideshows"), href: "#" },
            { label: t("videoPresentations"), href: "#" },
            { label: t("videoInvitations"), href: "#" },
            { label: t("openerAnimations"), href: "#" },
            { label: t("greetingCards"), href: "#" },
          ],
        },
        {
          title: t("featured"),
          items: [
            { label: t("animatedExplainers"), href: "#" },
            { label: t("youtubeIntros"), href: "#" },
            { label: t("outroAnimation"), href: "#" },
            { label: t("2dAnimations"), href: "#" },
            { label: t("animatedTexts"), href: "#" },
            { label: t("logoAnimations"), href: "#" },
            { label: t("birthdayGreetings"), href: "#" },
            { label: t("animatedECards"), href: "#" },
            { label: t("worldOfVideos"), href: "#" },
            { label: t("greetingCards"), href: "#" },
          ],
        },
      ],
    },
    {
      href: "#",
      label: t("website"),
      dropdownItems: [
        {
          title: t("categories"),
          items: [
            { label: t("intros"), href: "#" },
            { label: t("animations"), href: "#" },
            { label: t("musicVisualizations"), href: "#" },
            { label: t("videoEditing"), href: "#" },
            { label: t("youtubeVideos"), href: "#" },
            { label: t("slideshows"), href: "#" },
            { label: t("videoPresentations"), href: "#" },
            { label: t("videoInvitations"), href: "#" },
            { label: t("openerAnimations"), href: "#" },
            { label: t("greetingCards"), href: "#" },
          ],
        },
        {
          title: t("featured"),
          items: [
            { label: t("animatedExplainers"), href: "#" },
            { label: t("youtubeIntros"), href: "#" },
            { label: t("outroAnimation"), href: "#" },
            { label: t("2dAnimations"), href: "#" },
            { label: t("animatedTexts"), href: "#" },
            { label: t("logoAnimations"), href: "#" },
            { label: t("birthdayGreetings"), href: "#" },
            { label: t("animatedECards"), href: "#" },
            { label: t("worldOfVideos"), href: "#" },
            { label: t("greetingCards"), href: "#" },
          ],
        },
      ],
    },
    {
      href: "#",
      label: t("logos"),
      dropdownItems: [
        {
          title: t("categories"),
          items: [
            { label: t("intros"), href: "#" },
            { label: t("animations"), href: "#" },
            { label: t("musicVisualizations"), href: "#" },
            { label: t("videoEditing"), href: "#" },
            { label: t("youtubeVideos"), href: "#" },
            { label: t("slideshows"), href: "#" },
            { label: t("videoPresentations"), href: "#" },
            { label: t("videoInvitations"), href: "#" },
            { label: t("openerAnimations"), href: "#" },
            { label: t("greetingCards"), href: "#" },
          ],
        },
        {
          title: t("featured"),
          items: [
            { label: t("animatedExplainers"), href: "#" },
            { label: t("youtubeIntros"), href: "#" },
            { label: t("outroAnimation"), href: "#" },
            { label: t("2dAnimations"), href: "#" },
            { label: t("animatedTexts"), href: "#" },
            { label: t("logoAnimations"), href: "#" },
            { label: t("birthdayGreetings"), href: "#" },
            { label: t("animatedECards"), href: "#" },
            { label: t("worldOfVideos"), href: "#" },
            { label: t("greetingCards"), href: "#" },
          ],
        },
      ],
    },
    {
      href: "#",
      label: t("mockups"),
      dropdownItems: [
        {
          title: t("categories"),
          items: [
            { label: t("intros"), href: "#" },
            { label: t("animations"), href: "#" },
            { label: t("musicVisualizations"), href: "#" },
            { label: t("videoEditing"), href: "#" },
            { label: t("youtubeVideos"), href: "#" },
            { label: t("slideshows"), href: "#" },
            { label: t("videoPresentations"), href: "#" },
            { label: t("videoInvitations"), href: "#" },
            { label: t("openerAnimations"), href: "#" },
            { label: t("greetingCards"), href: "#" },
          ],
        },
        {
          title: t("featured"),
          items: [
            { label: t("animatedExplainers"), href: "#" },
            { label: t("youtubeIntros"), href: "#" },
            { label: t("outroAnimation"), href: "#" },
            { label: t("2dAnimations"), href: "#" },
            { label: t("animatedTexts"), href: "#" },
            { label: t("logoAnimations"), href: "#" },
            { label: t("birthdayGreetings"), href: "#" },
            { label: t("animatedECards"), href: "#" },
            { label: t("worldOfVideos"), href: "#" },
            { label: t("greetingCards"), href: "#" },
          ],
        },
      ],
    },
    {
      href: "#",
      label: t("graphics"),
      dropdownItems: [
        {
          title: t("categories"),
          items: [
            { label: t("intros"), href: "#" },
            { label: t("animations"), href: "#" },
            { label: t("musicVisualizations"), href: "#" },
            { label: t("videoEditing"), href: "#" },
            { label: t("youtubeVideos"), href: "#" },
            { label: t("slideshows"), href: "#" },
            { label: t("videoPresentations"), href: "#" },
            { label: t("videoInvitations"), href: "#" },
            { label: t("openerAnimations"), href: "#" },
            { label: t("greetingCards"), href: "#" },
          ],
        },
        {
          title: t("featured"),
          items: [
            { label: t("animatedExplainers"), href: "#" },
            { label: t("youtubeIntros"), href: "#" },
            { label: t("outroAnimation"), href: "#" },
            { label: t("2dAnimations"), href: "#" },
            { label: t("animatedTexts"), href: "#" },
            { label: t("logoAnimations"), href: "#" },
            { label: t("birthdayGreetings"), href: "#" },
            { label: t("animatedECards"), href: "#" },
            { label: t("worldOfVideos"), href: "#" },
            { label: t("greetingCards"), href: "#" },
          ],
        },
      ],
    },
    {
      href: "#",
      label: t("exploreAI"),
      dropdownItems: [
        {
          title: t("categories"),
          items: [
            { label: t("intros"), href: "#" },
            { label: t("animations"), href: "#" },
            { label: t("musicVisualizations"), href: "#" },
            { label: t("videoEditing"), href: "#" },
            { label: t("youtubeVideos"), href: "#" },
            { label: t("slideshows"), href: "#" },
            { label: t("videoPresentations"), href: "#" },
            { label: t("videoInvitations"), href: "#" },
            { label: t("openerAnimations"), href: "#" },
            { label: t("greetingCards"), href: "#" },
          ],
        },
        {
          title: t("featured"),
          items: [
            { label: t("animatedExplainers"), href: "#" },
            { label: t("youtubeIntros"), href: "#" },
            { label: t("outroAnimation"), href: "#" },
            { label: t("2dAnimations"), href: "#" },
            { label: t("animatedTexts"), href: "#" },
            { label: t("logoAnimations"), href: "#" },
            { label: t("birthdayGreetings"), href: "#" },
            { label: t("animatedECards"), href: "#" },
            { label: t("worldOfVideos"), href: "#" },
            { label: t("greetingCards"), href: "#" },
          ],
        },
      ],
    },
  ];
};
