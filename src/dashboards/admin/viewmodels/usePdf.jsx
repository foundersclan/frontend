import jsPDF from 'jspdf';
export const usePdf = () => {
    const downloadPDF = (founder) => {
        const doc = new jsPDF()
        const pageWidth = doc.internal.pageSize.getWidth()
        const pageHeight = doc.internal.pageSize.getHeight()
        const marginBottom = 20 // space reserved for footer

        // ── Draw Header (called on each new page) ────────────────
        const drawHeader = () => {
            doc.setFillColor(245, 158, 11)
            doc.rect(0, 0, pageWidth, 18, 'F')
            doc.setTextColor(0, 0, 0)
            doc.setFontSize(11)
            doc.setFont('helvetica', 'bold')
            doc.text('FOUNDERSCLAN', 14, 12)
            doc.setFont('helvetica', 'normal')
            doc.setFontSize(8)
            doc.text(`REG-${founder.id}  •  ${new Date().toLocaleDateString()}`, pageWidth - 14, 12, { align: 'right' })
        }

        // ── Draw Footer (called on each new page) ────────────────
        const drawFooter = () => {
            doc.setFillColor(245, 158, 11)
            doc.rect(0, pageHeight - 10, pageWidth, 10, 'F')
            doc.setTextColor(0, 0, 0)
            doc.setFontSize(7)
            doc.setFont('helvetica', 'normal')
            doc.text('FoundersClan — Confidential Registration Report', pageWidth / 2, pageHeight - 4, { align: 'center' })
        }

        // ── Page Break Helper ────────────────────────────────────
        const checkPageBreak = (y, neededHeight = 20) => {
            if (y + neededHeight > pageHeight - marginBottom) {
                drawFooter()
                doc.addPage()
                drawHeader()
                return 28 // y position after new page header
            }
            return y
        }

        // ── Section Helper ───────────────────────────────────────
        const section = (title, y) => {
            y = checkPageBreak(y, 14)
            doc.setFillColor(245, 245, 245)
            doc.rect(14, y, pageWidth - 28, 7, 'F')
            doc.setTextColor(100, 100, 100)
            doc.setFontSize(7)
            doc.setFont('helvetica', 'bold')
            doc.text(title.toUpperCase(), 17, y + 5)
            return y + 12
        }

        const field = (label, value, x, y, maxWidth = 80) => {
            y = checkPageBreak(y, 14)
            doc.setTextColor(150, 150, 150)
            doc.setFontSize(7)
            doc.setFont('helvetica', 'normal')
            doc.text(label, x, y)
            doc.setTextColor(20, 20, 20)
            doc.setFontSize(9)
            doc.setFont('helvetica', 'bold')
            const lines = doc.splitTextToSize(value || 'N/A', maxWidth)
            doc.text(lines, x, y + 5)
            return y + 5 + lines.length * 5
        }

        // ── Page 1 Header ────────────────────────────────────────
        drawHeader()

        // ── Title ────────────────────────────────────────────────
        doc.setTextColor(15, 15, 15)
        doc.setFontSize(20)
        doc.setFont('helvetica', 'bold')
        doc.text(founder.full_name || 'N/A', 14, 34)

        doc.setFontSize(10)
        doc.setFont('helvetica', 'normal')
        doc.setTextColor(100, 100, 100)
        doc.text(`${founder.role || 'Founder'}  at  ${founder.company_name || 'N/A'}`, 14, 42)

        // Status badge
        const statusColor = founder.status === 'approved' ? [34, 197, 94] :
            founder.status === 'rejected' ? [239, 68, 68] : [245, 158, 11]
        doc.setFillColor(...statusColor)
        doc.roundedRect(pageWidth - 45, 28, 30, 10, 2, 2, 'F')
        doc.setTextColor(255, 255, 255)
        doc.setFontSize(7)
        doc.setFont('helvetica', 'bold')
        doc.text((founder.status || 'pending').toUpperCase(), pageWidth - 30, 34.5, { align: 'center' })

        // Divider
        doc.setDrawColor(230, 230, 230)
        doc.line(14, 50, pageWidth - 14, 50)

        // ── 01. Personal Info ────────────────────────────────────
        let y = section('01. Personal Information', 55)
        field('Email', founder.email, 14, y)
        field('Phone / WhatsApp', founder.phone, 110, y)
        y += 14

        y = checkPageBreak(y, 14)
        field('Location', `${founder.city || ''}, ${founder.state || ''}`, 14, y)
        field('LinkedIn', founder.linkedin_url || 'Not provided', 110, y, 80)
        y += 14

        // ── 02. Business Info ────────────────────────────────────
        y = section('02. Business Intelligence', y + 4)
        field('Company', founder.company_name, 14, y)
        field('Industry', founder.industry_type, 110, y)
        y += 14

        y = checkPageBreak(y, 14)
        field('Current Stage', founder.current_stage, 14, y)
        field('Business Started', founder.business_started_month_year || 'N/A', 110, y)
        y += 14

        if (founder.business_idea) {
            const lines = doc.splitTextToSize(founder.business_idea, pageWidth - 28)
            const blockHeight = lines.length * 6 + 12
            y = checkPageBreak(y, blockHeight)
            field('Business Idea', founder.business_idea, 14, y, pageWidth - 28)
            y += blockHeight
        }

        // ── 03. Metrics ──────────────────────────────────────────
        y = section('03. Business Metrics', y + 4)
        field('MRR', founder.mrr, 14, y)
        field('Team Size', founder.team_size, 65, y)
        field('Funding Status', founder.funding_status, 116, y)
        y += 14

        y = checkPageBreak(y, 14)
        field('Market Classification', founder.market_classification, 14, y)
        y += 14

        // ── 04. Value Exchange ───────────────────────────────────
        y = section('04. Value Exchange', y + 4)

        if (founder.biggest_problem_solved) {
            const lines = doc.splitTextToSize(founder.biggest_problem_solved, pageWidth - 28)
            const blockHeight = lines.length * 6 + 12
            y = checkPageBreak(y, blockHeight)
            field('Biggest Problem Solved', founder.biggest_problem_solved, 14, y, pageWidth - 28)
            y += blockHeight
        }

        if (founder.current_challenge) {
            const lines = doc.splitTextToSize(founder.current_challenge, pageWidth - 28)
            const blockHeight = lines.length * 6 + 12
            y = checkPageBreak(y, blockHeight)
            field('Current Challenge', founder.current_challenge, 14, y, pageWidth - 28)
            y += blockHeight
        }

        if (founder.why_join_elite) {
            const lines = doc.splitTextToSize(founder.why_join_elite, pageWidth - 28)
            const blockHeight = lines.length * 6 + 12
            y = checkPageBreak(y, blockHeight)
            field('Why Join Elite', founder.why_join_elite, 14, y, pageWidth - 28)
            y += blockHeight
        }

        // ── 05. Verification ─────────────────────────────────────
        y = section('05. Verification', y + 4)
        field('Willing to Pay Membership', founder.willing_to_pay_membership, 14, y)
        field('Open to Vetting Call', founder.vetting_call, 110, y)
        y += 14

        if (founder.referral) {
            y = checkPageBreak(y, 14)
            field('Referral', founder.referral, 14, y)
            y += 14
        }

        // ── Footer (last page) ───────────────────────────────────
        drawFooter()

        doc.save(`FoundersClan_REG-${founder.id}_${founder.full_name?.replace(/\s+/g, '_')}.pdf`)
    }

    return {
        downloadPDF
    }
}