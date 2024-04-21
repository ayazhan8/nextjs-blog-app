"use client";

import { useModalsContext } from "@/context/modals-context";
import React from "react";
import MobileNav from "./MobileNav";

const Modal = () => {
  const { activeModal } = useModalsContext();

  if (activeModal === "mobive-nav") return <MobileNav />;

  return null;
};

export default Modal;
