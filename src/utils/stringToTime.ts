export default function toStringTime(timeString: string): number {
    return  (new Date(timeString + "Z")).getTime() / 1000;
}