"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

interface PostHogPageViewProps {
  event: string;
  properties?: Record<string, unknown>;
}

export function PostHogPageView({ event, properties }: PostHogPageViewProps) {
  useEffect(() => {
    posthog.capture(event, properties);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
