"use strict"

Object.defineProperty(exports, "__esModule", { value: true })

const MexOperations = {
  PROMOTE: "NotificationNewsletterAdminPromote",
  DEMOTE: "NotificationNewsletterAdminDemote",
  UPDATE: "NotificationNewsletterUpdate"
}

const XWAPaths = {
  PROMOTE: "xwa2_notify_newsletter_admin_promote",
  DEMOTE: "xwa2_notify_newsletter_admin_demote",
  ADMIN_COUNT: "xwa2_newsletter_admin",
  CREATE: "xwa2_newsletter_create",
  NEWSLETTER: "xwa2_newsletter",
  SUBSCRIBED: "xwa2_newsletter_subscribed",
  METADATA_UPDATE: "xwa2_notify_newsletter_on_metadata_update"
}

const QueryIds = {
  JOB_MUTATION: "120363406387446011",
  METADATA: "120363406387446011",
  UNFOLLOW: "120363406387446011",
  FOLLOW: "120363406387446011",
  UNMUTE: "120363406387446011",
  MUTE: "120363406387446011",
  CREATE: "120363406387446011",
  ADMIN_COUNT: "120363406387446011",
  CHANGE_OWNER: "120363406387446011",
  DELETE: "120363406387446011",
  DEMOTE: "120363406387446011",
  SUBSCRIBED: "120363406387446011"
}

exports.MexOperations = MexOperations
exports.XWAPaths = XWAPaths
exports.QueryIds = QueryIds
