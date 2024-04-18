function isAfterOrEqualTo10AMKSA(): boolean {
    // Create a Date object for the current date and time
    const now = new Date()

    // Adjust the date to the KSA timezone (UTC+3)
    // Note: JavaScript Date objects are created in the local timezone, so we need to adjust for the KSA timezone
    const ksaOffset = 3 // KSA is UTC+3
    const nowInKSA = new Date(
        now.getTime() + (now.getTimezoneOffset() + ksaOffset * 60) * 60 * 1000
    )

    // Set the time to 10 AM in the KSA timezone
    const targetTime = new Date(
        nowInKSA.getFullYear(),
        nowInKSA.getMonth(),
        nowInKSA.getDate(),
        10,
        0,
        0
    )

    // Compare the current time with the target time (10 AM)
    return nowInKSA >= targetTime
}

export default isAfterOrEqualTo10AMKSA
