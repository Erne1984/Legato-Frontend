export const getYouTubeEmbedUrl = (url: string): string => {
  try {
    const parsed = new URL(url);
    const videoId =
      parsed.hostname === "youtu.be"
        ? parsed.pathname.slice(1)
        : parsed.searchParams.get("v");

    if (!videoId) return url;

    parsed.searchParams.delete("v");
    const extraParams = parsed.searchParams.toString();
    const embedUrl =
      `https://www.youtube.com/embed/${videoId}` +
      (extraParams ? `?${extraParams}` : "");

    return embedUrl;
  } catch {
    return url; 
  }
};
